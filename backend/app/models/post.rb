class Post < ApplicationRecord
    # has_one_attached :featured_image
    has_many :comments
end
