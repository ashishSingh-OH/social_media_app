class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :tittle, :caption, :featured_image
  def featured_image
    puts "fffffffffffffffffffffffffffffffffffffffffffff"
    if object.featured_image.attached?
      {
        url: rails_blob_url(object.featured_image)
      }
    end
  end
end
