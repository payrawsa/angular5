(function(myApp){

    'use strict';
    myApp.directive('cars',
    [function(){
        var controller = ['$scope', function($scope){
            $scope.testTwo = "this is a test of the directive";
        }];
        return {
            restrict : 'EA',
            controller: controller,
            scope: {
                car: '='
            },
            templateUrl: 'templates/car.directive.html'        };

    }]);

})(myApp);
