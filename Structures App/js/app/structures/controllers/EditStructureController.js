'use strict';

app.controller('EditStructureController', ['$scope',
    function ($scope, $location) {

	  $scope.save = function () {
	    $scope.structure.save();

	    // todo: redirect to sucessfully saved a structure
	    $location.path('/');
	  };
    }]);