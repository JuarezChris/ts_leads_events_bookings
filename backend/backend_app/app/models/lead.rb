class Lead < ApplicationRecord
    # Add validations, relationships, or custom methods here
    belongs_to :booking # The leads table has the foreign key 'booking_id'
    belongs_to :guests_account # A lead belongs to a guests_account
    belongs_to :event_manager # A lead belongs to an event manager
    belongs_to :booking # The leads table has the foreign key 'booking_id'
    has_many :events # A booking has many events
  end
  