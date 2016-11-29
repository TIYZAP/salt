class ReviewSerializer < ActiveModel::Serializer
  attributes :venue_name, :venue_address, :dish, :body, :rating
  has_one :user
end
