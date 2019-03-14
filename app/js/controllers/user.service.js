myApp.service('userService', function(){
    var user = {};

    this.getUser = function(){
        return user;
    };

    this.setUser = function(data){
      user = data;
      return;
    };
});
