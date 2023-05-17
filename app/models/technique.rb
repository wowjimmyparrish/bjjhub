class Technique < ApplicationRecord
    has_many :commentss, dependent: :destroy 
    has_many :users, through: :comments
    belongs_to :user
    belongs_to :position
end
