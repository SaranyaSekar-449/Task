var app = angular.module('myApp', []);


app.controller('LoginFormController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.username = '';
    $scope.password = '';

    $scope.login = function() {
        if ($scope.username === 'admin' && $scope.password === '1234') {
            $rootScope.isLoggedIn = true;
            $rootScope.isInvalidCredentials = false;
        } else {
            $rootScope.isLoggedIn = false;
            $rootScope.isInvalidCredentials = true;
        }
    };
}]);

app.controller('LoginStatusController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.isLoggedIn = false;
    $scope.isInvalidCredentials = false;

    $rootScope.$watchGroup(['isLoggedIn', 'isInvalidCredentials'], function(newValues) {
        $scope.isLoggedIn = newValues[0];
        $scope.isInvalidCredentials = newValues[1];
    });
}]);

