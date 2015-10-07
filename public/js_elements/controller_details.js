'use strict';
angular.module('TwitterClientCtrls').controller('DetailsCtrl', ['$scope','$routeParams', 'APIService',
function ($scope, $routeParams, APIService)
{
   	APIService.GetTweet($routeParams.id).then(function(d)
  	{
    	$scope.data = d.data.data;
    });
}
}]);