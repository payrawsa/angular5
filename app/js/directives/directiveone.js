(function(myApp){

    'use strict';
    myApp.directive('directiveOne',
    [function(){
        var controller = ['$scope', function($scope){
            $scope.testTwo = "this is a test of the directive";
        }];
        return {
            restrict : 'EA',
            controller: controller,
            scope: {
                testName: '=testName'
            },
            templateUrl: 'js/directives/test.html'        };

    }]);


})(myApp);
