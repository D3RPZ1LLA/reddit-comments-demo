class CommentsController < ApplicationController

  def index
    render json: Comment.where(
      commentable_id: index_params[:commentable_id],
      commentable_type: index_params[:commentable_type].capitalize
    ).map(&:serialize)
  end

  private
  def index_params
    params.permit(:commentable_type, :commentable_id)
  end
end
