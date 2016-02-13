angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth, getAll) {
  $scope.data = {links: getAll};

  $scope.signout = Auth.signout;

});
