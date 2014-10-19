'use strict';

//angular.module('structuresApp.controllers', [])

app.controller('IntroController', ['$scope', '$state', '$ionicSlideBoxDelegate',
    function ($scope, $state, $ionicSlideBoxDelegate) {


        // called to navigate to the main app
        var startApp = function () {
            $state.go('main.timeline');

            // set a flag that we finished the tutorial
             window.localStorage['didIntro'] = true;
        };


        //no this is silly
        // check if the user already did the tutorial and skip it if so
        
        if (window.localStorage['didIntro'] === "true") {
            console.log('skip intro');
            startApp();
        }
        else {
            setTimeout(function () {
                navigator.splashscreen.hide();
            }, 750);
        }

        $scope.startApplication = function () {
            startApp();
        };


        // move to the next slide
        $scope.next = function () {
            //$scope.$broadcast('slidebox.nextslide');
            $ionicSlideBoxDelegate.next();
            console.log('nexting');
        };

        var skipButton = [{
            content: 'Skip',
            type: 'button-positive button-clear',
            tap: function (e) {
                startApp();
            }
        }];

        $scope.skipButton = skipButton;

        // called each time the slide changes
        $scope.slideChanged = function (index) {
            if (index === 2) {
                startApp();
            }
        };

    }
]);