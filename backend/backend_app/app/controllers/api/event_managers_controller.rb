class Api::EventManagersController < ApplicationController
    before_action :authenticate_json_request # Ensures JSON requests
    
    # Ensure requests are JSON to prevent errors
    def authenticate_json_request
        unless request.format.json?
            render json: { error: "Invalid request format" }, status: :not_acceptable
        end
    end

    # Registers Event Manager
    def register
        puts "💡 Received Parameters: #{params.inspect}"
        @event_manager = EventManager.new(event_manager_params)
        # @event_manager = EventManager.new(params[:user])
        # @event_manager.password = params[:password]

        if @event_manager.save
            render json: { 
                message: 'Registration successful', 
                event_manager: { id: @event_manager.id, email: @event_manager.email }
            }, status: :created
        else
            render json: { error: @event_manager.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def event_manager_params
        params.require(:event_manager).permit(:fname, :lname, :email, :password, :password_confirmation)
    end

    def login
        @event_manager = EventManager.find_by_email(params[:email])
        if @event_manager.password == params[:password]
            give_token
        else
            redirect_to home_url
        end
    end
end