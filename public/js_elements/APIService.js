'use strict';
angular.module('TwitterClientServices').service('APIService', ['$http', '$q', 'serverConfig',
function($http, $q, serverConfig)
{
  	this.Search = function(query)
  	{
	    var items = {};
	    var deferred = $q.defer();
	    $http.get( serverConfig.url + 'search?q=' + encodeURIComponent(query)).then(
	      	function (res)
	      	{
	        	if (res.data)
	        	{
	          		items.error = false;
	          		items.data = res.data.statuses;
	          		deferred.resolve(items);
	        	}
	        	else
	        	{
	          		items.error = true;
	          		items.data = 'INVALID_RESPONSE';
	          		deferred.reject(items);
	        	}
	      	},
	      	function (err)
	      	{
		        items.error = true;
		        items.data = err;
		        deferred.reject(items);
	      	});
	    return deferred.promise;
  	};
/*Get tweets from timeline. @param {number} length Amount of tweets to return @returns {Array} An Array Containing tweets from timeline*/
  	this.GetTimelineTweets = function (length)
  	{
	    var items = {};
	    var deferred = $q.defer();

    	$http.get(serverConfig.url + 'timeline?count=' + String(length)).then(
	    function (res)
	    {
	        if (res.data)
	        {
	          	items.error = false;
	          	items.data = res.data;
	          	deferred.resolve(items);
	        }
	        else
	        {
	          	items.error = true;
	          	items.data = 'INVALID_RESPONSE';
	          	deferred.reject(items);
	        }
	    },
	    function (err)
	    {
	        items.error = true;
	        items.data = err;
	        deferred.reject(items);
	    });
	    return deferred.promise;
  	};
/*Get a Top #10 nearest trends @param {string} woeid User localization with WOEID (Where On Earth IDentifier) @returns {Array} An array containing top #10 nearest trends.*/
  	this.GetTrends = function (woeid)
  	{
	    var items = {};
	    var deferred = $q.defer();
    	$http.get( serverConfig.url + 'trends?id=' + String(woeid)).then(
	      	function (res)
	      	{
		        items.error = false;
		        if (res.data[0])
		        {
			        items.error = false;
			        items.data = res.data[0].trends;
		          	// Parse Urls (for redirecting to localhost and not twitter.com)
		          	items.data.forEach(function (index)
		          	{
		            	index.url = index.url.replace('http://twitter.com/search?q=', serverConfig.url + '#/search/');
		          	});
		          	deferred.resolve(items);
		        }
		        else
		        {
		          	items.error = true;
		          	items.data = 'INVALID_RESPONSE';
		          	deferred.reject(items);
		        }
      		},
	      	function (err)
	      	{
	        	items.error = true;
	        	items.data = err;
	        	deferred.reject(items);
	      	});
    	return deferred.promise;
  	};
  	this.GetTweet = function(id)
  	{
	    var item = {};
	    var deferred = $q.defer();
	    $http.get(serverConfig.url + 'tweet?id=' + String(id)).then(
	      	function (res)
	      	{
	        	if (res)
	        	{
	          		item.error = false;
	         	 	item.data = res;
	          		deferred.resolve(item);
	        	}
	        	else
	        	{
	          		item.error = true;
	          		item.data = 'INVALID_RESPONSE';
	          		deferred.reject(item);
	        	}
	      	},
	      	function (err)
	      	{
	        	item.error = true;
	        	item.data = err;
	        	deferred.reject(item);
	    	});
	    return deferred.promise;
	};
}]);