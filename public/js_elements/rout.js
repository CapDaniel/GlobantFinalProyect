'use strict';
angular.module('TwitterClientMain').config(['$routeProvider', function ($routeProvider)
{
  $routeProvider
    // Nearest Trends Route
    .when('/trends',
    {
      templateUrl : 'views/trends.html', controller  : 'TrendsCtrl'
    })
    // Search Routes
    .when('/search/:query/:id',
    {
      templateUrl : 'views/details.html', controller  : 'DetailsCtrl'
    })
    .when('/search/:query',
    {
      templateUrl : 'views/search.html',
      controller  : 'SearchCtrl'
    })
    .when('/search/',
    {
      templateUrl : 'views/search.html', controller  : 'SearchCtrl'
    })
    // Blocked List Route
    .when('/blocked',
    {
      templateUrl : 'views/blocked.html', controller  : 'BlockedUsersCtrl'
    })
    // Root Routes (Timeline by default)
    .when('/:id',
    {
      templateUrl : 'views/details.html', controller  : 'DetailsCtrl'
    })
    .when('/',
    {
      templateUrl : 'views/timeline.html', controller  : 'TimelineCtrl'
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
    // Setting LocalStorage:
    $localStorage.$default({users: [] });
    // TODO: MAKE CACHE FOR TEMPLATES (WHEN FINISHED)
    // $http.get('../views/Settings.html', {cache: $templateCache});
  }]);