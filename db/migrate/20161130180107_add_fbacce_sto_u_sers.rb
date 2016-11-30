class AddFbacceStoUSers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :fb_token, :string
  end
end
