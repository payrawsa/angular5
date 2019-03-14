(function(myApp){

    'use strict';
    myApp.directive('navBar',
    [function(){

        var controller = ['$scope', function($scope){
            $scope.purchases = "purchases.html";
            

        }];
        return {
            restrict : 'E',
            controller: controller,
            templateUrl: 'js/directives/test.html'
          };

    }]);
})(myApp);
