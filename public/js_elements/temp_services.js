var app=angular.module('TempService',['ngStorage']);
app.value("tempStorage", {});
app.service('SaveTweet',['tempStorage','$location',function (tempStorage,$location)
{
	return
	{
		goTo:function(url,args)
		{
			tempStorage.args=args;
			$location.path(url);
		}
	};
}]);
app.run(function($rootScope, tempStorage)
{
  $rootScope.$on('$routeChangeSuccess', function(evt, current, prev)
  {
    current.locals.$args = tempStorage.args;
  });
});