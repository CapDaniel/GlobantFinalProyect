'use strict';
angular.module('TwitterClientCtrls').controller('TrendsCtrl',
  ['$scope', 'APIService', 'LocationService',
  function($scope, APIService, LocationService)
  {
    // Get User Location
    LocationService.GetLocation().then(function (data)
    {
      // Get Trends
      APIService.GetTrends(data.LocationData.woeid).then(function(data)
      {
        // Bind trends
        $scope.data = data;
      });
    });
}]);