class Snippet < ApplicationRecord
  include PgSearch::Model
  pg_search_scope :search, against: :text, using: {
    tsearch: {dictionary: "english", any_word: true, prefix: true}
  }

  belongs_to :author, class_name: "User", required: false
end
