require 'bcrypt'

class EventManager < ApplicationRecord
    include BCrypt
    has_secure_password
    has_many :leads # An event manager has many leads

    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, length: { minimum: 6 }

    # def password
    #     @password ||= Password.new(password_hash)
    # end

    # def password=(new_password)
    #     @password = Password.create(new_password)
    #     self.password_hash = @password
    # end

    class Lead < ApplicationRecord
        belongs_to :event_manager # A lead belongs to an event manager
    end
end
