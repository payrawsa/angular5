myApp.
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/Pcoin', {
          templateUrl: 'templates/what is Pcoin.html'
        }).
        when('/cars', {
          templateUrl: 'templates/cars.html',
          controller: 'controllerone'
        }).
        when('/', {
          templateUrl: 'templates/welcome home.html'
        }).
        otherwise('/');
    }
  ]);
