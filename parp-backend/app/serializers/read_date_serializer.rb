class ReadDateSerializer < ActiveModel::Serializer
  attributes :id, :month, :day, :year, :completed
  has_many :books
end
