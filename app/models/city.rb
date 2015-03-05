class City < ActiveRecord::Base
  validates :name, presence: true
  validates :info, presence: true
  validates :population, presence: true
end
