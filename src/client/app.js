var app = angular.module('app', ['ngTouch', 'ui.grid', 'ngNotify']);

app.controller('MainCtrl', ['$scope', 'ngNotify', function ($scope, ngNotify) {

  $scope.myData = [];

  var ws = new WebSocket("ws://localhost:3000/users");

  ws.onmessage = function(event) {
    var msg = JSON.parse(event.data);

    $scope.myData = msg;
    $scope.$digest();
    ngNotify.set('A force has disturbed the users database!');

  }

}]);
