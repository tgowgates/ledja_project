class UserSubscriptionsController < ApplicationController

  def edit
    @user_subscription = UserSubscription.find(params[:id])
  end

  def update
    @current_user = current_user
    @user_subscription = UserSubscription.find(params[:id])
    @user_subscription.update(subscription_params)
    #flash[:notice] = "Settings updated for #{current_user.email}."

    # respond_to do |format|
    #   format.html { render 'subscriptions/index'}
    #   format.js { flash.now[:notice] = "Here is my flash notice" }
    # end
  end

  private

  def subscription_params
    params.require(:user_subscription).permit(:reminder, :deal_notification)
  end
end
