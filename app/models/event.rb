class Event < ApplicationRecord
    belongs_to :booking # An event belongs to a booking
    belongs_to :lead # An event belongs to a lead
    belongs_to :event_financial # An event belongs to a event_financial
end
