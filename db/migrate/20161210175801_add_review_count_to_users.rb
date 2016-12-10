class AddReviewCountToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :review_count, :integer
  end
end
