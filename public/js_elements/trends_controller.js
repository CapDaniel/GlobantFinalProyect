'use strict';
angular.module('TwitterClientCtrls').controller('trends_controller', ['$scope', 'APIService', 'LocationService',
function($scope, APIService, LocationService)
{
    LocationService.GetLocation().then(
        function (data)
        {
          APIService.GetTrends(data.LocationData.woeid).then(
              function(data)
              {
                  $scope.data = data;
              });
        });
}]);