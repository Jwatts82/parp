class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :read_time
  belongs_to :read_date
end
