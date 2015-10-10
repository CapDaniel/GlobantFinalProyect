'use strict';
angular.module('TwitterClientMain').config(['$routeProvider', function ($routeProvider)
{
  $routeProvider
    // Nearest Trends Route
    .when('/trends',
    {
      templateUrl : 'trends.html', controller  : 'trends_controller'
    })
    // Search Routes
    .when('/search/:query/:id',
    {
      templateUrl : 'details.html', controller  : 'controller_details'
    })
    .when('/search/:query',
    {
      templateUrl : 'search.html', controller  : 'search_controller'
    })
    .when('/search/',
    {
      templateUrl : 'search.html', controller  : 'search_controller'
    })
    // Blocked List Route
    .when('/blocked',
    {
      templateUrl : 'blocked.html', controller  : 'user_blocked'
    })
    // Root Routes (Timeline by default)
    .when('/:id',
    {
      templateUrl : 'details.html', controller  : 'controller_details'
    })
    .when('/',
    {
      templateUrl : 'timeline.html', controller  : 'timeline_controller'
    })
    // By default, redirect to Root Route
    .otherwise(
    {
      redirectTo  : '/'
    });
}])
// Template Cache & Setting LocalStorage:
.run(['$templateCache', '$http', '$localStorage', function ($templateCache, $http, $localStorage)
{
    $localStorage.$default({users: [] });
}]);