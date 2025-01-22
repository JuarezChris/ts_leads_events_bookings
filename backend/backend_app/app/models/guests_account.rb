class GuestsAccount < ApplicationRecord
    has_one :lead # A booking has one associated lead
end
