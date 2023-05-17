class Technique < ApplicationRecord
    has_many :comments, dependent: :destroy 
    has_many :users, through: :comments
    belongs_to :user
    belongs_to :position

    validates :name, presence: true, uniqueness: {case_sensitive: false} 
    validates :video, presence: true
    # Check syntax for this validation
    validates :position, presence: true, inclusion: { in: %w(guard side control knee on belly mount rear mount turtle),
        message: "%{value} is not a valid position" }
    
end
