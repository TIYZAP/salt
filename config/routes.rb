Rails.application.routes.draw do
  root 'static#index'
    get '/home' => 'static#index', as: 'home'
  scope '/api' do
    resources :reviews
    get '/timeline' => 'reviews#timeline'
    get '/search' => 'geo_search#search'
    get '/search/place' => 'geo_search#show'
    get '/profile' => 'user#show'
    get '/koala' => 'koala#test'
    get '/facebook/follow' => 'user#follow_facebook'
    get '/friends/all' => 'user#all_friends'
    post '/unfollow' => 'user#unfollow_user'
    get '/friends/reviews' => 'reviews#friends_reviews'
    post '/send/rec' => 'reviews#send_rec'
    post '/invite/friends' => 'user#send_invites'
    get '/search/friends' => 'user#search_for_friends'
    post '/follow/friend' => 'user#follow_one_friend'
    post '/reviews/destroy' => 'reviews#destroy'
    get '/reviews/:id' =>'reviews#show'
  end
  devise_for :users, controllers: {
    omniauth_callbacks: "users/omniauth_callbacks",
    registrations: 'users/registrations'
  }

  get '/:thing/(:thing)' => 'static#index'
end
