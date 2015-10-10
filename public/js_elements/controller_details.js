'use strict';
angular.module('TwitterClientCtrls').controller('controller_details', ['$scope','$routeParams', 'APIService',
function ($scope, $routeParams, APIService)
{
    if ($routeParams.id)
    {
      	APIService.GetTweet($routeParams.id).then(
        function(d)
        {
          	$scope.data = d.data.data;
        },
    }
}]);