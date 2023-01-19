class ReadDateSerializer < ActiveModel::Serializer
  attributes :id, :month, :day, :year, :completed
end
