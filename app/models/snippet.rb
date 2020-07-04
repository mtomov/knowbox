class Snippet < ApplicationRecord
  include PgSearch::Model
  pg_search_scope :search, against: :text, using: {
    tsearch: {dictionary: "english", any_word: true, prefix: true, highlight: {
      StartSel: "<b>",
      StopSel: "</b>",
      MaxWords: 123,
      MinWords: 456,
      ShortWord: 4,
      HighlightAll: true,
      MaxFragments: 3,
      FragmentDelimiter: "&hellip;"
    }}
  }

  belongs_to :author, class_name: "User", required: false
end
