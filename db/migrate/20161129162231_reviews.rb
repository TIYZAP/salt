class Reviews < ActiveRecord::Migration[5.0]
  def change
    add_column :reviews, :rating, :integer
    add_column :reviews, :body, :text
    add_column :reviews, :dish, :string
    add_column :reviews, :place_id, :string
    add_column :reviews, :venue_name, :string
    add_column :reviews, :venue_address,:string
    add_reference :reviews, :user, index: true
  end
end
