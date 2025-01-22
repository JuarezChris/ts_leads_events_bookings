class CreateEventManagers < ActiveRecord::Migration[8.0]
  def change
    create_table :event_managers do |t|
      t.timestamps
    end
  end
end
