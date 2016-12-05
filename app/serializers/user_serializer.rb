class UserSerializer < ActiveModel::Serializer
  attributes :name, :image, :email, :id
  has_many :reviews

  def image
    Refile.attachment_url(object, :image, :fit, 200, 200, format: "jpg")
  end
end
