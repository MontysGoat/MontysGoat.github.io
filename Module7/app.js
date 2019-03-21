(function () {
    'use strict';
    
    angular.module('ShoppingListCheckoff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    .filter('ngDollar', AngularDollarsFilter);
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var toBuyList = this;
    
      toBuyList.items = ShoppingListCheckOffService.getItemsToBuy();

      toBuyList.isEmpty = function () {
        return toBuyList.items.length < 1;
      }
    
      toBuyList.buyItem = function (index) {
        ShoppingListCheckOffService.buyItem(index);
      }
    }
    
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var boughtList = this;
    
      boughtList.items = ShoppingListCheckOffService.getBoughtItems();
      
      boughtList.isEmpty = function () {
        return boughtList.items.length < 1;
      }
      
    }
    
    
    function ShoppingListCheckOffService() {
      var service = this;
    
      // List of shopping items
      var itemsToBuy = [
        { 
          name: "Dish Soap",
          quantity: 1,
          pricePerItem: 2
        }, 
        { 
          name: "Milk",
          quantity: 2,
          pricePerItem: 1.50
        }, 
        { 
          name: "Eggs",
          quantity: 12,
          pricePerItem: .2
        }, 
        { 
          name: "Laundry Detergent",
          quantity: 1,
          pricePerItem: 5
        }, 
        { 
          name: "Trail Mix",
          quantity: 3,
          pricePerItem: 6
        }
      ];

      var boughtList = [];
    
      service.buyItem = function (index) {
        var removedItem = itemsToBuy.splice(index, 1)[0];
        removedItem.totalPrice = removedItem.quantity * removedItem.pricePerItem;
        boughtList.push(removedItem);
      };

      service.getItemsToBuy = function () {
        return itemsToBuy;
      }

      service.getBoughtItems = function () {
        return boughtList;
      }
    }

    function AngularDollarsFilter() {
      return function (input) {
        return "$$$" + input;
      }
    }
    })();
    