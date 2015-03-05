germanyMap.controller('editCtrl', ['$location', '$scope', 'cityData', '$routeParams', '$q', function($location, $scope, cityData, $routeParams, $q){
  console.log('inside edit ctrl')

  $scope.rootPath = function() {
    $location.url('/');
  }

  $scope.cancel = function() {
    $location.url('/');
  }

  $scope.editCity = null;
  $scope.findCity = function(){
    $scope.editCity = cityData.findCity($routeParams.id)
  }

  $scope.findCity();
  this.deferred = $q.defer();
  this.deferred.promise.then($scope.findCity);
  cityData.loadCities(this.deferred);
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
}])