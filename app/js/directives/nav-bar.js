(function(myApp){

    'use strict';
    myApp.directive('navDirective',
    [function(){
        var controller = ['$scope', function($scope){
            $scope.home = "Home";
            $scope.test = "Test Page"
        }];
        return {
            restrict : 'EA',
            controller: controller,
            templateUrl: 'templates/nav-bar.html'
         };

    }]);

})(myApp);
