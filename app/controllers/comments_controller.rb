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
    render json: Comment.where(
      commentable_id: index_params[:commentable_id],
      commentable_type: index_params[:commentable_type].capitalize
    ).map(&:serialize)
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
    params.permit(:commentable_type, :commentable_id)
  end
end
