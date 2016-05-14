fireApp.factory('Authentication',
    ['$rootScope', '$firebaseAuth', '$firebaseObject',
    '$location', 'FIREBASE_URL'],
    function($rootScope, $firebaseAuth, $firebaseObject, $location, FIREBASE_URL){
      //firebase object
      var ref=new Firebase(FIREBASE_URL);
      var auth=$firebaseAuth(ref);

    });//factory
