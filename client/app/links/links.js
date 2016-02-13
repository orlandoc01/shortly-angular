angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  // Your code here
  $scope.data = {};
  Links.getAll().then(function (links) {
    links.sort(function (link1, link2) {
      return link2.visits - link1.visits;
    });
    $scope.data.links = links;
    window.links = links;
    console.log($scope.data);
  });

  $scope.signout = Auth.signout;
});
