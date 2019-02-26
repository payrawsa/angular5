myApp.
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/Pcoin', {
          templateUrl: 'templates/what is Pcoin.html'
        }).
        when('/test', {
          template: '<directive-one></directive-one>'
        }).
        when('/', {
          templateUrl: 'templates/welcome home.html'
        }).
        otherwise('/');
    }
  ]);
