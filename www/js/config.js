(function(ng){
  'use strict';

  angular.module('poolozhe.config', ['ionic'])

  .run(['$ionicPlatform', ($ionicPlatform) => {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  }])

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('home',{
      url: '/home',
      abstract: true,
      view: {
        'homeView': {
          templateUrl: 'templates/menu.html'
        }
      }
    })

    .state('home.ilist', {
      url: '/home/list/',
      view: {
        'menuContent': {
          templateUrl: 'templates/ideas-list.html'
        }
      }
    })
    ;
    $urlRouterProvider.otherwise('/home/list');
  })

})(angular);
