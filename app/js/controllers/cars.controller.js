(function (){
'use strict';
angular
    .module('myApp')
    .controller('cars', cars);

cars.$inject = ['$scope', '$http'];

function cars(
$scope,
$http
){
        $scope.snippet = '<span style="color:red"> hi there </span>';
        $scope.sortOrder = "name";
        $http.get('http://localhost:7000/available_cars').then(function(response){
          $scope.car_list=response.data;
          console.log("we are here");
          console.log(response);
        });

    };
})();
