(function(ng){
  'use strict';
  ng
  .module('poolozhe.ideasListCtrl', [])

  .controller('ideasListCtrl', ['$scope', 'ideasStorage', function($scope, ideasStorage){
    ng.
    extend($scope, {
      ideasList : ideasStorage.getIdeasList()

    });
  }])
  ;

})(angular)
