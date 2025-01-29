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
        puts "Received Parameters: #{params.inspect}"
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
    
    def login
        # puts "Here"
        # puts "Received Parameters: #{params.inspect}"
        # puts "#{event_manager_params}"
        @event_manager = EventManager.find_by_email(event_manager_params[:email])

        if @event_manager&.authenticate(event_manager_params[:password])
            session[:event_manager_id] = @event_manager.id # Store user ID in session
            render json: { 
                message: "Login successful", 
                event_manager: { id: @event_manager.id, email: @event_manager.email } 
            }, status: :ok
            else
            render json: { error: "Invalid email or password" }, status: :unauthorized
        end

        # if @event_manager.password == params[:password]
        #     give_token
        # else
        #     redirect_to home_url
        # end
    end

    def logout
        session[:event_manager_id] = nil # Clears session
        render json: { message: "Logged out successfully" }, status: :ok
    end
    
    def check_login
        if session[:event_manager_id]
            event_manager = EventManager.find(session[:event_manager_id])
            render json: { logged_in: true, event_manager: { id: event_manager.id, email: event_manager.email } }
        else
            render json: { logged_in: false }
        end
    end


    private

    def event_manager_params
        params.require(:event_manager).permit(:fname, :lname, :email, :password, :password_confirmation)
    end
end