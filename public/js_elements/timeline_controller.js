'use strict';
angular.module('TwitterClientCtrls').controller('TimelineCtrl', ['$scope', 'APIService', 'BlockedUsersService',
function($scope, APIService, BlockedUsersService)
{
    $scope.isBlocked = function (User)
    {
        return BlockedUsersService.isBlocked(User);
    };
    $scope.BlockUser = function (User)
    {
        BlockedUsersService.AddBlockedUser(User);
    };
    APIService.GetTimelineTweets(45).then(function(data)
    {
        $scope.data = data;
    });
}]);