germanyMap.controller('editCtrl', function($location, $scope, cityData, $routeParams, $q){
  console.log('inside edit ctrl')

  $scope.editCity = null;
  $scope.findCity = function(){
    $scope.editCity = cityData.findCity($routeParams.id)
  }

  $scope.findCity();
  $scope.submitForm = function(){
    cityData.updateCity(
    {
      city: {
        id: $routeParams.id, name: $scope.editCity.name, info: $scope.editCity.info, population: $scope.editCity.population
      }
    }
    );
    $scope.editCity.name = '';
    $scope.editCity.info = '';
    $scope.editCity.population = '';
    $location.url('/');
  }
})