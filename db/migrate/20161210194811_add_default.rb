class AddDefault < ActiveRecord::Migration[5.0]
  def change
    change_column_default :users, :review_count, 0
  end
end
