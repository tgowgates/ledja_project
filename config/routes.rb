Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # Adding routes for Plaid API
  get 'plaid_api/new'
  post '/get_access_token', to: 'plaid_api#get_access_token'
end
