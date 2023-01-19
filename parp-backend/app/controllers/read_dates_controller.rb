class ReadDatesController < ApplicationController
  before_action :set_read_date, only: %i[ show update destroy ]

  # GET /read_dates
  def index
    @read_dates = ReadDate.all

    render json: @read_dates
  end

  # GET /read_dates/1
  def show
    render json: @read_date
  end

  # POST /read_dates
  def create
    @read_date = ReadDate.new(read_date_params)

    if @read_date.save
      render json: @read_date, status: :created, location: @read_date
    else
      render json: @read_date.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /read_dates/1
  def update
    if @read_date.update(read_date_params)
      render json: @read_date
    else
      render json: @read_date.errors, status: :unprocessable_entity
    end
  end

  # DELETE /read_dates/1
  def destroy
    @read_date.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_read_date
      @read_date = ReadDate.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def read_date_params
      params.require(:read_date).permit(:month, :day, :year, :completed)
    end
end
