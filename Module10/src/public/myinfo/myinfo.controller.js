(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['allMenuItems','getUser'];  
function MyInfoController(allMenuItems, getUser) {
  var $ctrl = this;
  $ctrl.user = getUser();

  $ctrl.userExists = $ctrl.user != undefined;

  if($ctrl.userExists){
    $ctrl.favoritedish = allMenuItems.menu_items
                         .find(item => item.short_name == $ctrl.user.favoritedish);
  } 
}


})();
