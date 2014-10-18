'use strict';
//angular.module('structuresApp.Controllers', [])
app.controller('TimelineController', ['$scope', 'TimelineService',
function ($scope, TimelineService) {

    //promise whiche returns all tasks from Telerik backend services
    TimelineService.allTasks(function (data) {
        console.log(data);
    });

    TimelineService.getTaskById('44e9b030-56e6-11e4-90ab-35bf04915830', function (data) {
        console.log(data);
    });

    var allTasks = TimelineService.all();
    $scope.tasks = allTasks;
    $scope.isCompleted = function (task) {
        return task.completed;
    };
    var upcomingTasks = TimelineService.getUpcoming([], allTasks, new Date(), 20);
    upcomingTasks.sort(function (a, b) {
        return a.date - b.date;
    });
    $scope.upcomingTasks = upcomingTasks;
}
]);
