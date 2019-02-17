class CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    comment = Comment.new create_params
    if comment.save
      render json: comment.serialize
    else
      render json: { error: 'bad-request' }, status: 400
    end
  end

  def index
    render json: Comment.where(index_params).map(&:serialize)
  end

  private
  def create_params
    strong_param = params.require(:comment).permit(
      :message, :commentable_id, :commentable_type
    )
    strong_param[:commentable_type] = strong_param[:commentable_type]&.capitalize
    strong_param.merge(user_id: current_user.id)
  end

  def index_params
    strong_param = params.permit(:commentable_type, :commentable_id)
    strong_param[:commentable_type] = strong_param[:commentable_type]&.capitalize
    strong_param
  end
end
