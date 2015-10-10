'use strict';
angular.module('TwitterClientCtrls').controller('navbar_controller', ['$scope', '$location',
function($scope, $location)
{
    $scope.onHome = function()
    {
        return $location.path() === '/';
    };
    $scope.onTrends = function()
    {
        return $location.path().substr(0, 7) === '/trends.html';
    };
    $scope.onBlocked = function()
    {
        return $location.path().substr(0, 8) === '/blocked.html';
    };
    $scope.onSearch = function()
    {
        return $location.path().substr(0, 7) === '/search.html';
    };
}]);