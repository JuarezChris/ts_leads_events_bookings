class RenamePasswordToPasswordDigest < ActiveRecord::Migration[8.0]
  def change
    rename_column :event_managers, :password, :password_digest
  end
end
