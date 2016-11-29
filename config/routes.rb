Rails.application.routes.draw do
  resources :reviews
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    omniauth_callbacks: "users/omniauth_callbacks"
  }
get '/jon' => 'geo_search#search'
get '/' => 'static#index'
end
