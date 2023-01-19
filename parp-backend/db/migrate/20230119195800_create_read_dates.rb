class CreateReadDates < ActiveRecord::Migration[7.0]
  def change
    create_table :read_dates do |t|
      t.string :month
      t.integer :day
      t.integer :year
      t.boolean :completed

      t.timestamps
    end
  end
end
