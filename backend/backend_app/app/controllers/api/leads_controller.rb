# class LeadsController < ApplicationController
# end
puts "Hello"
class Api::LeadsController < ApplicationController
    def index
        Rails.logger.info "Api::LeadsController#index is being hit"
        puts "Api::LeadsController#index is being hit"
        @leads = Lead.all
        render json: @leads
    end
  
    def show
      @lead = Lead.find(params[:id])
      render json: @lead
    end
  end
