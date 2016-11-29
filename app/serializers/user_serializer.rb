class UserSerializer < ActiveModel::Serializer
  attributes :name
  has_many :reviews
end
