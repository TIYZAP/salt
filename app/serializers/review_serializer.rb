class ReviewSerializer < ActiveModel::Serializer
  attributes :venue_name, :venue_address, :dish, :body, :rating, :created_at
  has_one :user

end
