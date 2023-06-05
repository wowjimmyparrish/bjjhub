class TechniqueSerializer < ActiveModel::Serializer
  attributes :id, :name, :video, :user_id
  has_many :comments
  belongs_to :user
  has_one :position
end
