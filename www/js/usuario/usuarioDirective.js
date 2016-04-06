(function(){
  angular.module('starter').directive('usuario',function () {
    return {
      templateUrl: 'js/usuario/usuario.html',
      controller: 'UserDirectiveCtrl as userCtrl',
      scope: {
        user: '=',
        inList: '='
      }
    };
  });

  angular.module('starter').controller('UserDirectiveCtrl',[
    '$scope',
    function ($scope) {
      this.user = $scope.user;
    }
  ])
})();
