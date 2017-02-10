var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", ["$scope", "$firebaseAuth",
  function($scope, $firebaseAuth) {
    var auth = $firebaseAuth();

    $scope.signIn = function() {
      $scope.firebaseUser = null;
      $scope.error = null;

      auth.$signInAnonymously().then(function(firebaseUser) {
        $scope.firebaseUser = firebaseUser;
      }).catch(function(error) {
        $scope.error = error;
      });
    };
  }
]);