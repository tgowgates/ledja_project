class SubscriptionsController < ApplicationController
  def index
    @current_user = current_user
    # figure out if the user is running for first time
    # first run true/false
  end
end
