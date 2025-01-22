# class LeadsController < ApplicationController
# end

class Api::LeadsController < ApplicationController
    def index
      @leads = Lead.all
      render json: @leads
    end
  
    def show
      @lead = Lead.find(params[:id])
      render json: @lead
    end
  end
