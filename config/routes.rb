Rails.application.routes.draw do
  get 'subscriptions/index', to: 'subscriptions#index'
  devise_for :users
  root to: 'pages#home'
  resources :user_subscriptions
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # Adding routes for Plaid API
  get 'plaid_api/new'
  get 'pages/aboutus', to: 'pages#aboutus'
  get 'pages/show', to: 'pages#show'
  post '/callback', to: 'plaid_api#callback'
  get '/accounts', to: "accounts#index"
end
