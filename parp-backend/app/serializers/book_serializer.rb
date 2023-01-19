class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :read_time, :read_date_id
end
