class RemoveImage < ActiveRecord::Migration[6.0]
  def change
  remove_column :posts, :featured_image
  end
end
