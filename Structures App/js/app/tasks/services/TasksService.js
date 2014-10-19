'use strict';

//angular.module('structuresApp.services', [])
app.factory('TasksService', ['TimelineService',function (TimelineService) {

    return {
        all: function () {
            return tasks;
        },
        get: function (taskId) {
            return tasks[taskId];
        }
    }
}]);
