class ApplicationController < ActionController::Base
  def current_user
    return User.find_by_username('test_user')
  end
end
