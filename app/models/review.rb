class Review < ApplicationRecord

  belongs_to :user

  validates_presence_of :venue_name, :body, :dish, :place_id, :venue_address
  validates_inclusion_of :rating, in => 1..5

  def self.timeline(user)
    follwing_ids = user.followees(User).pluck(:id)
    Review.where(user_id: following_ids).order("created_at DESC")
  end

end
