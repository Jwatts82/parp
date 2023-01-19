require "test_helper"

class ReadDatesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @read_date = read_dates(:one)
  end

  test "should get index" do
    get read_dates_url, as: :json
    assert_response :success
  end

  test "should create read_date" do
    assert_difference("ReadDate.count") do
      post read_dates_url, params: { read_date: { completed: @read_date.completed, day: @read_date.day, month: @read_date.month, year: @read_date.year } }, as: :json
    end

    assert_response :created
  end

  test "should show read_date" do
    get read_date_url(@read_date), as: :json
    assert_response :success
  end

  test "should update read_date" do
    patch read_date_url(@read_date), params: { read_date: { completed: @read_date.completed, day: @read_date.day, month: @read_date.month, year: @read_date.year } }, as: :json
    assert_response :success
  end

  test "should destroy read_date" do
    assert_difference("ReadDate.count", -1) do
      delete read_date_url(@read_date), as: :json
    end

    assert_response :no_content
  end
end
