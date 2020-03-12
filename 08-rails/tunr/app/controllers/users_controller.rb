class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    raise "hell"
  end
end
