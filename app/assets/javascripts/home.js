var germanyMap = angular
  .module('germanyMap', ['ngRoute'])
  .config(function($httpProvider){
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $("meta[name=csrf-token]").attr("content");
  })
  .config(function($routeProvider){
    $routeProvider
      .when('/cities/new', {
        templateUrl: 'assets/templates/new.html',
        controller: 'newCtrl'
      })
      .when('/cities/:id/edit', {
        controller: 'editCtrl',
        templateUrl: 'assets/templates/edit.html'
      })
      .otherwise({
        templateUrl: 'assets/templates/index.html',
        controller: 'indexCtrl'
      })
  })
;