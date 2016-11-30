class UserSerializer < ActiveModel::Serializer
  attributes :name, :image, :email
  has_many :reviews
end
