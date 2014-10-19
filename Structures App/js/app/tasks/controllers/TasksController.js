'use strict';

app.controller('TasksController', ['$scope', 'TimelineService',
    function ($scope, TimelineService) {
        $scope.tasks = TimelineService.all();
    }]);