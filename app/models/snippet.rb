class Snippet < ApplicationRecord
  belongs_to :author, class_name: "User", required: false
end
