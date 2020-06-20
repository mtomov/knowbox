class CreateSnippets < ActiveRecord::Migration[6.0]
  def change
    create_table :snippets do |t|
      t.string :text
      t.references :author, foreign_key: {to_table: :users}
      t.string :source
      t.integer :copied_count, default: 0

      t.timestamps
    end
  end
end
