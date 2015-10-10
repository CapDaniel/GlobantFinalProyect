'use strict';
angular.module('TwitterClientServices').service('BlockedUsersService', ['$localStorage', function($localStorage)
{
    this.GetBlockedUsers = function()
    {
        return $localStorage.users;
    };
    this.AddBlockedUser = function(User)
    {
        $localStorage.users.push(
        {
            id                : User.id,
            name              : User.name,
            screen_name       : User.screen_name,
            profile_image_url : User.profile_image_url
        });
    };
    this.DeleteBlockedUser = function(User)
    {
        var storage = $localStorage.users;
        var index = storage.map(function(d)
        { 
            return d.id;
        });
        storage.splice(index.indexOf(User.id), 1);
    };
    this.isBlocked = function(User)
    {
        var storage = $localStorage.users;
        var index = storage.map(function(d)
        {
            return d.id;
        });
        return index.indexOf(User.id) !== -1;
    };
}])