class UserSerializer < ActiveModel::Serializer
  attributes :name, :image, :email, :id, :review_count
  has_many :reviews
  has_many :badges

  def image
    Refile.attachment_url(object, :image, :fit, 200, 200, format: "jpg")
  end
end
