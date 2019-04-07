(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)
    .constant('ApiBasePath', "https://www.davidchuschinabistro.com");


  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        onRemove: '&',
        nothingFound: '<'
      },
      controller: NarrowItDownController,
      controllerAs: 'controller',
      bindToController: true
    };

    return ddo;
  }



  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var controller = this;
    controller.searchTerm = "";
    controller.found = {};   

    controller.narrowItDown = function () {
      if(controller.searchTerm.trim() != ""){
        MenuSearchService.getMatchedMenuItems(controller.searchTerm)
        .then( function (result){
          controller.found = result;
        })
      } else {
        controller.found = [];
      }
    }

    controller.onRemove = function (itemIndex){
      controller.found.splice(itemIndex, 1)
    }

    controller.nothingFound = function () {
      return controller.found.length == 0 ;
    }
  }


  MenuSearchService.$inject = ['$http', 'ApiBasePath', '$filter'];
  function MenuSearchService($http, ApiBasePath, $filter) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      })
      .then(function (result) {
        var foundItems = $filter('filter')(result.data.menu_items, { description: searchTerm });
        return foundItems;
      })
    }

  }

})();
