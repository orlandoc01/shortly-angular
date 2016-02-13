angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here
  var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;

  var isValidUrl = function (url) {
    return url.match(rValidUrl);
  };

  $scope.link = {
    url: ""
  };

  $scope.shortenLink = {};

  $scope.messageTxt = "";

  $scope.shorten = {display: 'none'};

  $scope.addLink = function () {
    var check = isValidUrl($scope.link.url);
    if (check) {
      Links.addOne($scope.link)
      .then(function (res) {
        $scope.shortenLink = res.data;
        $scope.shorten.display = 'block';
        $scope.messageTxt = "";
      });

    } else {
      $scope.shortenLink = {};
      $scope.shorten.display = 'none';
      $scope.messageTxt = "Invalid URL";
    }
  };

  $scope.signout = Auth.signout;

});
