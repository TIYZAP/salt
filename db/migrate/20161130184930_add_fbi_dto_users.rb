class AddFbiDtoUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :fb_id, :string
  end
end
