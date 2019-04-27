(function () {
  'use strict';
  
  angular.module('MenuApp')
  .config(RoutesConfig);
  
  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
  
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');
  
    // *** Set up UI states ***
    $stateProvider
  
    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/menuApp/templates/home.template.html'
    })
  
    // Categories Page
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuapp/templates/categories.template.html',
      controller: 'CategoriesController as ctrl',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
  
    // Items in Category Page
    .state('items', {
      url: '/items/{categoryShortName}',
      templateUrl: 'src/menuapp/templates/items.template.html',
      controller: "ItemsController as itemCtrl",
      resolve:{
        items: ['MenuDataService','$stateParams', function(MenuDataService, $stateParams){
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    });
  }
  
  })();
  