germanyMap.factory(['$http', 'cityData', function($http) {
  cityData = {
    data: {
      cities: [
      ]
    },
    isLoaded: false
  }

  cityData.loadCities = function(){
    if(cityData.isLoaded == false){
      $http.get("/cities.json").success(function(citiesFromServer) {
        cityData.isLoaded = true;
        _.each(citiesFromServer, function(city){
          cityData.pushCity(city)
        })
      })
    }
  }

  cityData.pushCity = function(city) {
    cityData.data.cities.push(city);
  }

  cityData.addCity = function(city) {
    $http.post('/cities.json', city).success(function(citiesFromServer){
      cityData.pushCity(citiesFromServer);
    })
  }

  cityData.deleteCity = function(cityId) {
    $http.delete('/cities/' + cityId + '.json').success(function(data){
      var deletedCity = cityData.findCity(cityId);
      cityData.data.cities = _.without(cityData.data.cities, deletedCity)
    })
  }

  cityData.findCity = function(cityId) {
    return _.findWhere( cityData.data.cities, {id: parseInt(cityId)});
  }

  cityData.updateCity = function(city) {
    $http.patch('/cities/' + city.city.id + '.json', city).success(function(data){
      var foundCity = _.findWhere( cityData.data.cities, {id: parseInt(city.city.id)})
      foundCity.name = data.name
      foundCity.info = data.info
      foundCity.population = data.population
    })
  }

  return cityData;

}])