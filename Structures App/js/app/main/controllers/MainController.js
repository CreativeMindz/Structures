'use strict';

app.controller('MainController', ['$scope',
    function ($scope) {
        $scope.isIntroCompleted = function () {
            if (window.localStorage['didIntro'] === "true") {
                return true;
            }

            return false;
        };
    }]);