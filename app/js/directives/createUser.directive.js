(function(myApp){

  'use strict';
  myApp.directive('createUser',
  [function(){
    var controller = ['$scope','$http', '$window', function($scope,$http,$window){


      $scope.createUser = function(username,password, name){
        var data= {
          name: name,
          userId: username,
          password: password
        };

        $http.post('http://localhost:7000/createUser', data).then(function(response){
          if (response.data){
            $window.alert("Congratulations the user "+ username+" has been created")
          }
          else{
            $window.alert("The username has been taken, or your username/password is not allowed")
          }
          console.log(response);
        });
      }

    }];
    return {
      restrict : 'EA',
      controller: controller,
      templateUrl: 'templates/create user.html'
    };

    }]);

  })(myApp);
