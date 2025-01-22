class CreateEventFinancials < ActiveRecord::Migration[8.0]
  def change
    create_table :event_financials do |t|
      t.timestamps
    end
  end
end
