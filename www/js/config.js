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
      templateUrl: 'templates/menu.html'
    })
    ;
    $urlRouterProvider.otherwise('/home/list');
  })

})(angular);
