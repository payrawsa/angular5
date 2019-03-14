myApp.
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/createUser', {
          template: '<create-user></create-user>'
        }).
        when('/Pcoin', {
          templateUrl: 'templates/what is Pcoin.html'
        }).
        when('/cars', {
          templateUrl: 'templates/cars.html',
          controller: 'cars'
        }).
        when('/home', {
          templateUrl: 'templates/welcome home.html',
          controller: 'user'
        }).
        when('/', {
          template: '<login> </login>'
                }).
        otherwise('/');
    }
  ]);
