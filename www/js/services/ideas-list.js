(function(ng){
  'use strict';

  ng
  .module('poolozhe.services.ideasList', [])

  .factory('ideasStorage', function(){
    var
      ideasList = [
        {
          'id': 1,
          'name': 'Ali'
        },
        {
          'id': 2,
          'name': 'hosein'
        }
      ];

      return {
        getIdeasList: function(){
          return ideasList;
        }
      }
  })
  ;

})(angular);
