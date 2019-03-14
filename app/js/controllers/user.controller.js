(function (){
  'use strict';
  angular
  .module('myApp')
  .controller('user', user);

  user.$inject = ['$scope', '$window', 'userService'];

  function user(
    $scope,
    $window,
    userService
  ){
    $scope.user = userService.getUser();
    if (angular.equals($scope.user, {})){
      $window.location.href = '#';
    }
  };
})();
