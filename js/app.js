'user strict';

const fireApp=angular.module('fireApp',
      ['ngRoute', 'firebase'])
      .constant('FIREBASE_URL', 'https://angulardata16.firebaseio.com/');

//application initialization
//register work after injector is done loading modules
//run to kickstart app. runs after app services are configd
fireApp.run(['$rootScope', '$location',
  function($rootScope, $location){
    //listen on event $routeChangeError
    $rootScope.$on('$routeChangeError',
    function(event, next, previous, error){
        if(error=='AUT_REQUIRED'){
            $rootScope.message='Sorry, you must log in to access that page';
            $location.path('/login');
        }//Auth required
    }); //event info
  }]); //run

//configure routes using routeProvider dependent on ngRoute
//when() method used
fireApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/login', {
      templateUrl: 'views/login.html',
      controller: 'RegistrationController'
    }).
    when('/register', {
      templateUrl: 'views/register.html',
      controller: 'RegistrationController'
    }).
    otherwise({
      redirectTo: '/login'
    });
}]);//routes
