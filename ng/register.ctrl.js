angular.module('app')
.controller('RegisterCtrl', function ($scope, UserSvc) {
  $scope.register = function (username, password) {
    UserSvc.register(username, password)
    .then(function (response) {
      $scope.$emit('login', response.data)
      $scope.username = null
      $scope.password = null
    })
  }
})
