class Booking < ApplicationRecord
    has_one :lead # A booking has one associated lead
    has_many :events # A booking has many events
end
