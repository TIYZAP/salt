class Review < ApplicationRecord

  belongs_to :user

  validates_presence_of :venue_name, :body, :dish, :place_id, :venue_address
  validates_inclusion_of :rating, :in => 0..5

  attachment :image, type: :image


  def self.timeline(user)
    following_ids = user.followees(User).pluck(:id)
    all_ids = following_ids << user.id
    Review.where(user_id: all_ids).order("created_at DESC")
  end


end
