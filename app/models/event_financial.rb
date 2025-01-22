class EventFinancial < ApplicationRecord
    has_one :event # A booking has one associated event
end
