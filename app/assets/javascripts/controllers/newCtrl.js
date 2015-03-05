germanyMap.controller('newCtrl', ['$location', '$scope', 'cityData', function($location, $scope, cityData){

  $scope.rootPath = function() {
    $location.url('/');
  }

  $scope.cancel = function() {
    $location.url('/');
  }

  $scope.submitForm = function() {
    cityData.addCity(
    {
      city: {
        name: $scope.formCityName, info: $scope.formCityInfo, population: $scope.formCityPopulation
      }
    }
    );
    $scope.formCityName = '';
    $scope.formCityInfo = '';
    $scope.formCityPopulation = '';
    $location.url('/')
  };
}])