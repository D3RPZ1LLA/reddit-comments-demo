class PostsController < ApplicationController
  def index
    respond_to do |format|
      format.html { render :index }
      format.json { render json: Post.includes(:user, :comments).map(&:serialize) }
      format.js   { render :index }
    end
  end
end
