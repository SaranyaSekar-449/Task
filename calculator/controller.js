
var app = angular.module('app', []);
app.controller('ControllerOne', function($scope) {
    $scope.message = "Hello from Controller One";
  
    $scope.changeMessage = function() {
      $scope.message = "Changed message in Controller One";
    };
  });
  
  app.controller('ControllerTwo', function($scope) {
    $scope.count = 0;
  
    $scope.incrementCount = function() {
      $scope.count++;
    };
  });
  
