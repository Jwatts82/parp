class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.integer :read_time
      t.integer :read_date_id

      t.timestamps
    end
  end
end
