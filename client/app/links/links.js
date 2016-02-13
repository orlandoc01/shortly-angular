angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth, getAll) {
  $scope.data = {links: getAll};

  $scope.signout = Auth.signout;
})
.directive('shortenedLink', function () {
  return {
    template: "\
      <div class='linkContainer' >\
      <img src='../assets/redirect_icon.png'/>\
      <div class='info'>\
        <div class='visits'><span class='count'>{{link.visits}}</span>Visits</div>\
        <div class='title'>{{link.title}}</div>\
        <div class='original'>{{link.url}}</div>\
        <a href='{{link.baseUrl}}/{{link.code}}'>{{link.baseUrl}}/{{link.code}}</a>\
      </div>\
    </div>"
  };
});
