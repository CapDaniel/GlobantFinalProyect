'use strict';
angular.module('TwitterClientCtrls').controller('SearchCtrl', ['$scope', '$routeParams', 'APIService',
function($scope, $routeParams, APIService)
{
    $scope.Search = function()
    {
        APIService.Search($scope.query).then(function(data)
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
    // If a query is present, automatically run the search
    // this is intended for routing (ex: /search/thing_to_search)
    if ($routeParams.query)
    {
        $scope.query = $routeParams.query;
        $scope.Search();
    }
}]);