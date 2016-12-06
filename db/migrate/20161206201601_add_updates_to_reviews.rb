class AddUpdatesToReviews < ActiveRecord::Migration[5.0]
  def change
    add_column :reviews, :website, :string
    add_column :reviews, :phone, :string
  end
end
