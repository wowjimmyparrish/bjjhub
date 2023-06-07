class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest
  has_many :comments
  has_many :created_techniques
  
end
