class EventManager < ApplicationRecord
    has_many :leads # An event manager has many leads
end
