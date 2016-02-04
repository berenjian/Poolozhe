(function(ng){
  'use strict';

  angular.module('poolozhe.config', [])

  .run(['$ionicPlatform', ($ionicPlatform) => {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  }])

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('home', {
      url: '/home',
      abstract: true,
      views: {
        'homeView': {
          templateUrl: 'templates/menu.html'
        }
      }
    })

    .state('home.ideas-list', {
      url: '/ideas-list',
      views: {
        'menuContent': {
          templateUrl: 'templates/ideas-list.html',
          controller: 'ideasListCtrl'
        }
      }
    })
    ;
    $urlRouterProvider.otherwise('/home/ideas-list');
  })
  ;

})(angular);
