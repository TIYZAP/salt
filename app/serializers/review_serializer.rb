class ReviewSerializer < ActiveModel::Serializer
  attributes :venue_name, :venue_address, :dish, :body, :rating, :created_at, :image, :website, :phone
  has_one :user

  def image
    Refile.attachment_url(object, :image, :fit, 800, 800, format: "jpg")
  end

end
