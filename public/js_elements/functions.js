'use strict';
angular.module('configs', [])
  .constant('serverConfig',
  {
    url: 'http://localhost:3000/'
  });
angular.module('TwitterClientFilters', []);
angular.module('TwitterClientServices', ['configs', 'ngStorage']);
angular.module('TwitterClientCtrls', ['configs', 'TwitterClientServices']);
angular.module('TwitterClientMain', ['TwitterClientServices', 'TwitterClientCtrls', 'ngRoute', 'ngStorage']);