FactoryBot.define do
  factory :snippet do
    text { "MyString" }
    author { nil }
    source { "MyString" }
    copied_count { 1 }
  end
end
