class AddImagetoReviews < ActiveRecord::Migration[5.0]
  def change
    add_column :reviews, :image_id, :string
  end
end
