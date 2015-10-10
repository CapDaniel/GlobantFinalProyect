'use strict';
angular.module('TwitterClientCtrls').controller('user_blocked', ['$scope', 'BlockedUsersService',
function($scope, BlockedUsersService)
{
    $scope.users = BlockedUsersService.GetBlockedUsers();
    $scope.DeleteBlockedUser = function (User)
    {
        BlockedUsersService.DeleteBlockedUser(User);
    };
}]);