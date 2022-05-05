class RemoveColumFromPost < ActiveRecord::Migration[6.0]
  def change
    remove_column :posts, :tittle
  end
end
