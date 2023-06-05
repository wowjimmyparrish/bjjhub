class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :age, :rank
  has_many :comments
  has_many :created_techniques
end
