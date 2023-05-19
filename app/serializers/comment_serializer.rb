class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment
  belongs_to :user
  belongs_to :technique
end
