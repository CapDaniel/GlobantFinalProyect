'use strict';
angular.module('TwitterClientServices').service('LocationService',['$window', '$http', '$q', 'serverConfig',
function($window, $http, $q, serverConfig)
{
    this.GetLocation = function()
    {
        var geo = {};
        geo.isSupported = $window.navigator.geolocation !== undefined;
        var deferred = $q.defer();
        var promise = deferred.promise;
        if (geo.isSupported)
        {
          $window.navigator.geolocation.getCurrentPosition(
              function(p)
              {
                  geo.isLocated = true;
                  geo.Lat = p.coords.latitude;
                  geo.Long = p.coords.longitude;
                  $http.get(serverConfig.url + 'myplace?lat=' + geo.Lat + '&long=' + geo.Long).then
                  (
                      function(res)
                      {
                          geo.LocationData = res.data[0];
                          if (geo.LocationData)
                          {
                              geo.serverResponse = true;
                              deferred.resolve(geo);
                          }
                          else
                          {
                              geo.serverResponse = false;
                              geo.error = 'INVALID_RESPONSE';
                              deferred.reject(geo);
                          }
                      },
                      function (err)
                      {
                          geo.serverResponse = false;
                          geo.error = err;
                          deferred.reject(geo);
                      });
              },
              function (err)
              {
                  geo.isLocated = false;
                  geo.error = err.code;
                  deferred.reject(geo);
              });
        }
        else
        {
            geo.isLocated = false;
            deferred.reject(geo);
        }
        return promise;
    };
}]);