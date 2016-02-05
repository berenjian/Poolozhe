(function(ng){
  'use strict';
  ng
  .module('poolozhe.pages.ideasList', [])

  .controller('ideasListCtrl', ['$scope', 'ideasStorage', function ($scope, ideasStorage) {
    ng.
    extend($scope, {
      ideasList : ideasStorage.getIdeasList()
    });
  }])

  .controller('singleIdeaCtrl', ['$scope', 'ideasStorage', function ($scope, ideasStorage){
    ng.
    extend($scope, {
      ideasList : ideasStorage.getIdeasList()

    });
  }])
  ;

})(angular)
