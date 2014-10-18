'use strict';

app.controller('TasksController', ['$scope', 'TasksService',
    function ($scope, TasksService) {
        $scope.tasks = TasksService.all();

    }]);