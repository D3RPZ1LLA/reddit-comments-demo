class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :commentable, polymorphic: true
  has_many   :comments,    as: :commentable

  def serialize
    {
      id: id,
      message: message,
      commentable_id: commentable_id,
      commentable_type: commentable_type,
      author: user
    }
  end
end
