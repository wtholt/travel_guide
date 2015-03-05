require 'rails_helper'

describe CitiesController do 
  let!(:city) {
    City.create({
      name: 'name',
      info: 'info',
      population: 'population'
      })
  }

  it 'should return all cities' do 
    get :index, :format => :json
    expect(assigns(:clinics)).not_to eq(nil)
  end


end