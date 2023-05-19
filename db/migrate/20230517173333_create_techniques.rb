class CreateTechniques < ActiveRecord::Migration[7.0]
  def change
    create_table :techniques do |t|
      t.string :name
      t.string :video
      t.boolean :is_favorite
      t.integer :user_id
      t.integer :position_id

      t.timestamps
    end
  end
end
