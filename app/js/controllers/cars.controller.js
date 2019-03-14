(function (){
  'use strict';
  angular
  .module('myApp')
  .controller('cars', cars);

  cars.$inject = ['$scope', '$http', 'userService'];

  function cars(
    $scope,
    $http,
    userService
  ){
    $scope.user = userService.getUser();
    $http.get('http://localhost:7000/available_cars').then(function(response){
      $scope.carList=response.data;
      console.log(response);
    });


  };
})();
