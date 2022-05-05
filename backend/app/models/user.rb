class User < ApplicationRecord
    has_many :comments
    has_many :posts
    has_secure_password
    validates_presence_of :email
    validates_uniqueness_of :email
    has_many :friend_requests_as_requestor,
        foreign_key: :requestor_id,
        class_name: :FriendRequest
    has_many :friend_requests_as_receiver,
        foreign_key: :receiver_id,
        class_name: :FriendRequest
end
