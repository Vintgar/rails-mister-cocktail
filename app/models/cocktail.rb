class Cocktail < ApplicationRecord
  has_many :doses, dependent: :destroy
  has_many :ingredients, through: :doses, dependent: :destroy
  validates :name, presence: true, uniqueness: true
  validates :description, presence: true
  has_one_attached :photo
end
