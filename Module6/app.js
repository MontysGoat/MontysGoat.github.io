(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController',  LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  
  $scope.judgement = "";
  $scope.lunch = "test";
  $scope.status = "";
  $scope.checkLunch = function () {
    if($scope.lunch == ""){
      $scope.judgement = "Please enter data first";
      $scope.status ="invalid";
    } else if (checkIfTooMuch($scope.lunch)) {
      $scope.judgement = "Too much!";
      $scope.status ="valid";
    } else {
      $scope.judgement = "Enjoy!";
      $scope.status ="valid";
    }
  };

  function checkIfTooMuch (lunch) {
    var lunchItems = lunch.split(',').filter( (el) =>  el.trim() != "");
    if(lunchItems.length > 3){
      return true;
    } else {
      return false;
    }
  };
}

})();
