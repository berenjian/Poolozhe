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

    .state('home.idea-submission', {
      url: '/submission',
      views: {
        'menuContent': {
          templateUrl: 'templates/idea-submission.html',
          controller: 'ideaSubmissionCtrl'
        }
      }
    })

    .state('home.idea-submission-step2', {
      url: '/submission-step2',
      views: {
        'menuContent': {
          templateUrl: 'templates/idea-submission-step2.html'
        }
      }
    })

    .state('home.about',{
      url: '/about',
      views:{
        'menuContent':{
          templateUrl: 'templates/about.html',
        }
      }
    })
    ;

    $urlRouterProvider.otherwise('/home/ideas-list');
  })
  ;

})(angular);
