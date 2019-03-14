(function(myApp){

  'use strict';
  myApp.directive('login',
  [function(){
    var controller = ['$scope','$http', '$window','$location','userService', function($scope,$http,$window, $location,userService){

      $scope.user = {}
      $scope.submit = function(username, password) {
        var config = {
          params: {
            userId: username,
            password: password
          }
        };
        $http.get('http://localhost:7000/users', config).then(function(response){

          if (response.data.length){
            console.log(response)
            userService.setUser(response.data[0]);
            $window.location.href = '#/home';
          }
          else{
            $window.alert("invalid username or password. Please create user or try again");
          }
        });
      }

    }];
    return {
      restrict : 'EA',
      controller: controller,
      templateUrl: 'templates/login.html'
    };

    }]);

  })(myApp);
