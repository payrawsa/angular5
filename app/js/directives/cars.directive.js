(function(myApp){

    'use strict';
    myApp.directive('cars',
    [function(){
        var controller = ['$scope', function($scope){
          $scope.submit = function(car) {
              console.log( "the car is: ", parseInt(car.value));
          }
        }];
        return {
            restrict : 'EA',
            controller: controller,
            scope: {
                car: '='
            },
            templateUrl: 'templates/car.directive.html'
          };

    }]);

})(myApp);
