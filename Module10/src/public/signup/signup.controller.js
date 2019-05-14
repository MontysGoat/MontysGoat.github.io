(function () {
  "use strict";
  
  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['allMenuItems', 'addUser'];  
  function SignUpController(allMenuItems, addUser) {
    var $ctrl = this;
    var allMenuItems = allMenuItems.menu_items.map(x => x.short_name.toUpperCase());
    
    $ctrl.submit = function () {
      $ctrl.completed = true;
    };

    $ctrl.dishExists = function (value) {
      return allMenuItems.includes(value.toUpperCase());
    }

    $ctrl.submit = function () {
      addUser($ctrl.user);
    }
  }
  
  })();
  