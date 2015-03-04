class CitiesController < ApplicationController
  
  def index
    @cities = City.all
  end

  def show
    @city = City.find params[:id]
  end

  def new
    @city = City.new
  end

  def edit 
    @city = City.find params[:id]
    render :json
  end

  def create
    @city = City.new(city_params)

    respond_to do |format|
      if @city.save
        format.html { redirect_to @city, notice: 'City was successfully created.' }
        format.json { render :show, status: :created, location: @city }
      else
        format.html { render :new }
        format.json { render json: @city.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @city = City.find params[:id]
    @city.update_attributes city_params
    respond_to do |format|
      if @city.update(city_params)
        format.html { redirect_to @city, notice: 'City was successfully updated.' }
        format.json { render :show, status: :ok, location: @city }
      else
        format.html { render :edit }
        format.json { render json: @city.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @city = City.find params[:id]
    @city.destroy
    respond_to do |format|
      format.html { redirect_to cities_url, notice: 'City was successfully destroyed.' }
      format.json { head :no_content }
    end
  end
private
  def city_params
    params.require(:city).permit(:name, :info, :population)
  end


end
