(function (){
'use strict';
angular
    .module('myApp')
    .controller('controllerone', controllerone);

controllerone.$inject = ['$scope'];

function controllerone(
$scope
){
        $scope.snippet = '<span style="color:red"> hi there </span>';
        $scope.sortOrder = "name";
        $scope.test = "this is a test";

    };
})();
