(function () {
    "use strict";
    
    angular.module('common')
    .service('UsersService', UsersService);
    
    
    UsersService.$inject = [];
    function UsersService() {
      var service = this;
      var user;
    
      service.addUser = function (newUser) {
        user = newUser;
      };

      service.getUser = function () {
        return user;
      };
    }
    
    
    
    })();
    