class CreateGuestsAccounts < ActiveRecord::Migration[8.0]
  def change
    create_table :guests_accounts do |t|
      t.timestamps
    end
  end
end
