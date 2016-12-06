Rails.application.routes.draw do
  resources :reviews
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    omniauth_callbacks: "users/omniauth_callbacks",
    registrations: 'users/registrations'
  }
  root 'static#index'
  get '/' => 'static#index'
  scope '/api' do
    get '/timeline' => 'reviews#timeline'
    get '/search' => 'geo_search#search'
    get '/search/place' => 'geo_search#show'
    get '/profile' => 'user#show'
    get '/koala' => 'koala#test'
    get '/facebook/follow' => 'koala#follow_facebook'
    get '/friends/all' => 'user#all_friends'
    get '/search/name' => 'geo_search#name_test'
    get '/email/test' => 'user#email_test'
    post '/unfollow' => 'user#unfollow_user'
    post '/mention' => 'user#mentions'
    get '/friends/reviews' => 'reviews#friends_reviews'
    post '/unmention' => 'user#un_mentions'
    post '/mentionable' => 'user#mentionable'
  end
  get '/:thing' => 'static#index'
end


# Rails Routes:
# reviews GET      /reviews(.:format)                      reviews#index
#                                  POST     /reviews(.:format)                      reviews#create
#                       new_review GET      /reviews/new(.:format)                  reviews#new
#                      edit_review GET      /reviews/:id/edit(.:format)             reviews#edit
#                           review GET      /reviews/:id(.:format)                  reviews#show
#                                  PATCH    /reviews/:id(.:format)                  reviews#update
#                                  PUT      /reviews/:id(.:format)                  reviews#update
#                                  DELETE   /reviews/:id(.:format)                  reviews#destroy
#                 new_user_session GET      /users/sign_in(.:format)                users/sessions#new
#                     user_session POST     /users/sign_in(.:format)                users/sessions#create
#             destroy_user_session DELETE   /users/sign_out(.:format)               users/sessions#destroy
# user_facebook_omniauth_authorize GET|POST /users/auth/facebook(.:format)          users/omniauth_callbacks#passthru
#  user_facebook_omniauth_callback GET|POST /users/auth/facebook/callback(.:format) users/omniauth_callbacks#facebook
#                    user_password POST     /users/password(.:format)               devise/passwords#create
#                new_user_password GET      /users/password/new(.:format)           devise/passwords#new
#               edit_user_password GET      /users/password/edit(.:format)          devise/passwords#edit
#                                  PATCH    /users/password(.:format)               devise/passwords#update
#                                  PUT      /users/password(.:format)               devise/passwords#update
#         cancel_user_registration GET      /users/cancel(.:format)                 devise/registrations#cancel
#                user_registration POST     /users(.:format)                        devise/registrations#create
#            new_user_registration GET      /users/sign_up(.:format)                devise/registrations#new
#           edit_user_registration GET      /users/edit(.:format)                   devise/registrations#edit
#                                  PATCH    /users(.:format)                        devise/registrations#update
#                                  PUT      /users(.:format)                        devise/registrations#update
#                                  DELETE   /users(.:format)                        devise/registrations#destroy
#                              jon GET      /jon(.:format)                          geo_search#search
