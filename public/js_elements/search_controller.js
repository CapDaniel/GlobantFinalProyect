'use strict';
angular.module('TwitterClientCtrls').controller('search_controller', ['$scope', '$routeParams', 'APIService', 'BlockedUsersService',
function($scope, $routeParams, APIService, BlockedUsersService)
{
    $scope.Search = function()
    {
        APIService.Search($scope.query).then(
        function(data)
        {
          $scope.data = data;
        });
    };
    $scope.isBlocked = function (User)
    {
        return BlockedUsersService.isBlocked(User);
    };
    $scope.BlockUser = function (User)
    {
        BlockedUsersService.AddBlockedUser(User);
    };
    if ($routeParams.query)
    {
        $scope.query = $routeParams.query;
        $scope.Search();
    }
}]);