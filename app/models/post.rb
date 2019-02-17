class Post < ApplicationRecord
  belongs_to :user
  has_many   :comments, as: :commentable

  def serialize
    {
      id: id,
      title: title,
      message: message,
      author: user
    }
  end
end
