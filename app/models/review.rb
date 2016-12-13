class Review < ApplicationRecord

  belongs_to :user

  validates_presence_of :venue_name, :body, :dish, :place_id, :venue_address
  validates_inclusion_of :rating, :in => 0..5

  attachment :image, type: :image
  after_commit :update_review_count


  def self.timeline(user)
    following_ids = user.followees(User).pluck(:id)
    all_ids = following_ids << user.id
    Review.where(user_id: all_ids).order("created_at DESC")
  end

  def update_review_count
    self.user.update(review_count: self.user.reviews.count)
  end

end
