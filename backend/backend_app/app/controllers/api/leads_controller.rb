# class LeadsController < ApplicationController
# end
class Api::LeadsController < ApplicationController
    before_action :authenticate_json_request # Ensures JSON requests

    # Ensure requests are JSON to prevent errors
    def authenticate_json_request
        unless request.format.json?
            render json: { error: "Invalid request format" }, status: :not_acceptable
        end
    end

    def index
        # puts "Api::LeadsController#index is being hit"
        @leads = Lead.all
        render json: @leads

    end
    
    def create
        puts "Made it to create"
        puts "Received Parameters: #{params.inspect}"
        @leads = Lead.new(params)
        lead.event_manager_id = session[:event_manager_id]

        if lead.save
            render json: lead, status: :created
        else
            render json: { error: lead.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        @lead = Lead.find(params[:id])
        render json: @lead
    end

    private

    def lead_params
        params.require(:lead).permit(:fname, :lname, :company, :email, :phone, :location, :event_title, :arrive, :lead_sources, :managers, :referal, :email_opt, :dates_flex, :depart, :status, :owner )
      end
end
