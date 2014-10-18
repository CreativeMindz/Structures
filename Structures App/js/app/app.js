// Structures App Main

var app = angular.module('structuresApp', ['ionic']) //, 'structuresApp.Controllers','structuresApp.services'
.run(function($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Wait for Cordova to load
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
        function onDeviceReady() {

        };

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.keyboard) {
            cordova.plugins.keyboard.hidekeyboardaccessorybar(true);
        };

        if (window.statusbar && statusbar.styledefault) {
            // org.apache.cordova.statusbar required
            statusbar.styledefault();
        };
      
  });
})

.config(function($stateProvider, $urlRouterProvider) {  
    $stateProvider

    // the intro state
    .state('intro', {
        url: "/",
        templateUrl: "./js/app/main/views/intro.html",
        controller: 'IntroController'
    })

    // setup an abstract state for the tabs directive
    .state('main', {
        url: "/main",
        abstract: true,
        templateUrl: "./js/app/main/views/main.html"
    })

    // Each tab has its own nav history stack:

    .state('main.timeline', {
        url: '/timeline',
        views: {
            'tab-timeline': {
                templateUrl: './js/app/timeline/views/tab-timeline.html',
                controller: 'TimelineController'
            }
        }
    })
    .state('main.structures', {
      url: '/structures',
      views: {
        'tab-structures': {
          templateUrl: './js/app/structures/views/structures.html',
          controller: 'StructuresController'
        }
      }
    })

    // must be moved in the main.structures state
    .state('main.structuresEdit', {
      url: '/structures2',
      views: {
        'tab-structures': {
          templateUrl: './js/app/structures/views/edit-structure.html',
          controller: 'StructuresController'
        }
      }
    })

    .state('main.tasks', {
      url: '/tasks',
      views: {
        'tab-tasks': {
          templateUrl: './js/app/tasks/views/tasks.html',
          controller: 'TasksController'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/'); //main/timeline

});

