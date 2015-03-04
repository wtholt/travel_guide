var indexCtrl = germanyMap.controller('indexCtrl', function($scope, cityData, $location){
  console.log('inside indexCtrl');
  $scope.cities = cityData.data;
  $scope.formCityName = '';
  $scope.formCityInformation = '';
  $scope.formCityPopulation = '';
  cityData.loadCities();

  $scope.createNew = function() {
    $location.url('/cities/new')
  }

  $scope.deleteCity = function(cityId) {
    cityData.deleteCity(cityId);
  }

  $scope.editCity = function(cityId) {
    $location.url('/cities/' + cityId + '/edit')
  }

});