var myapp = angular.module('myapp', ["ngSanitize", "ngCsv"]);

    myapp.controller('myctrl', function ($scope) {
	    $scope.filename = "test";
	    $scope.getArray = $scope.cities;

      $scope.addRandomRow = function() {
        $scope.getArray.push({a: Math.floor((Math.random()*10)+1), b: Math.floor((Math.random()*10)+1)});
      };

      $scope.getHeader = function () {return ["A", "B"]};

      $scope.clickFn = function() {
        console.log("click click click");
      };
    });