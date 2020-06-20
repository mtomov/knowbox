class ExtensionController < ApplicationController
  before_action :create_user_if_unknown_user
  layout false

  def show
  end

  def create_user_if_unknown_user
    d { current_user }
    return if current_user

    @user = User.create!
    reset_session
    auto_login(@user)
    remember_me!
  end
end
