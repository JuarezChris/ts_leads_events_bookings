# Rails.application.routes.draw do
# puts "Made it to routes"
  # resources :leads
#   resources :posts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  # get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
# end

# config/routes.rb
# Rails.logger.info "Received request to create lead:" # Logs to server logs
Rails.application.routes.draw do
  # puts "Loading routes.rb..."
  # resources :bookings
  # resources :event_managers

  namespace :api do
    resources :leads
    resources :event_managers, except: [:create]

    post 'leads/create', to: 'leads#create' # Custom create route
    post 'event_managers/register', to: 'event_managers#register' # Custom create route
    post 'event_managers/login', to: 'event_managers#login'
    delete 'event_managers/logout', to: 'event_managers#logout'

    get 'event_managers/check_login', to: 'event_managers#show'
    # AbstractController::ActionNotFound (The action 'show' could not be found for Api::EventManagersController):
    # get 'event_managers/check_login', to: 'event_managers#check_login'
  end
end
