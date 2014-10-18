'use strict';

//angular.module('structuresApp.services', [])
app.factory('TimelineService', ['TasksDataFactory', function (TasksDataFactory) {
    // Might use a resource here that returns a JSON array
    // Some fake testing data
    var repeatType = {
        daily: 1,
        weekly: 7,
        monthly: 30
    };

    var statusType = {
        completed: 'completed',
        missed: 'missed',
        pending: 'pending'
    };

    var getAllTasks = function(callback) {

        var result = TasksDataFactory.getTasks()
            .success(function (tasksList) {
                var formattedData = dataFormatter(tasksList);
                callback(formattedData);
            })
            .error(function (error) {
                return { "status": 'Unable to load task data: ' + error.message };
            });

        return result;
    }

    var getTaskById = function(id, callback) {

        var result = TasksDataFactory.getTask(id)
            .success(function (task) {
                var formattedData = dataFormatter(task);
                callback(formattedData);
            })
            .error(function (error) {
                return { "status": 'Unable to load task data: ' + error.message };
            });

        return result;
    }

    var tasks = [{
        id: 1,
        date: '10/09/2014 10:30',
        duration: '00:30',
        content: 'Motivate yourself with a quick ** for your success until now',
        goal: 'Structures',
        structure: 'Coding',
        categoryName: 'education',
        repeatType: repeatType.weekly
    }, {
        id: 2,
        date: '10/09/2014 11:30',
        duration: '00:30',
        content: 'Read something useful to improve your skills',
        goal: 'Structures',
        structure: 'Coding',
        categoryName: 'profession',
        categoryStatus: 'completed',
        repeatType: repeatType.daily
    }, {
        id: 3,
        date: '10/09/2014 14:00',
        duration: '00:30',
        content: 'Train or just relax on fresh air',
        goal: 'Structures',
        status: 'pending',
        categoryName: 'fitness',
        structure: 'Coding',
        repeatType: repeatType.monthly
    }, {
        id: 4,
        date: '10/09/2014 06:30',
        duration: '00:30',
        content: 'Wake up early',
        goal: 'Structures',
        categoryName: 'self-development',
        status: 'pending',
        structure: 'Coding',
        repeatType: repeatType.daily
    }, {
        id: 5,
        date: '10/11/2014 20:30',
        duration: '00:30',
        content: 'Relax with friends',
        categoryName: 'self-development',
        goal: 'Structures',
        structure: 'Coding',
        repeatType: repeatType.weekly
    }];

    //function getActiveAndReccuringTasks (allTasks) {
    //    var filteredTasks = allTasks.filter(function (task) {
    //
    //        // return all tasks that are active and repeating
    //
    //    });
    //}

    //binds data from backend services to the view data format
    var dataFormatter = function (data) {
        var dataArray = [];
        var formattedData = [];
        if (data.Result instanceof Array) {
            dataArray = data.Result;
        } else {
            dataArray.push(data.Result);
        }

        for (var i = 0; i < dataArray.length; i++) {
            var currentRecord = dataArray[i];
            var dateObject = new Date(currentRecord.Time);
            var formattedRecord = {
                time: dateObject.toLocaleTimeString(),
                date: dateObject.toLocaleDateString(),
                duration: currentRecord.Duration,
                content: currentRecord.Description,
                structure: currentRecord.Structure.Name,
                categoryName: currentRecord.Structure.Category,
            }
            formattedData.push(formattedRecord);
        }

        return formattedData;
    }

    var getTasksForDate = function (date, allTasks) {
        var filteredTasks = allTasks
            .filter(function (task) {
                var taskDate = new Date(task.date);
                return Math.abs(date.getDate() - taskDate.getDate()) % task.repeatType === 0;
            })
            .map(function (task) {
                task.status = statusType.pending;

                var taskDate = new Date(task.date);

                var hours;
                var minutes;

                hours = taskDate.getHours();
                minutes = taskDate.getMinutes();

                task.date = new Date(date.getYear(), date.getMonth(), date.getDate(), hours, minutes);

                return task;
            });
        return filteredTasks;
    };

    var getUpcoming = function (upcomingTasks, allTasks, date, count) {
        var tempTaskHolder = getTasksForDate(date, allTasks);
        upcomingTasks = upcomingTasks.concat(tempTaskHolder);
        if (upcomingTasks.length < count) {
            console.log('Date: ', date);
            date.setDate(date.getDate() + 1);
            var nextDate = new Date(date);
            return getUpcoming(upcomingTasks, allTasks, nextDate, count);
        };
        return upcomingTasks;
    };

    return {
        all: function () {
            return tasks;
        },
        allTasks: function (callback) {
            return getAllTasks(callback);
        },
        getTaskById: function (taskId, callback) {
            return getTaskById(taskId, callback);
        },
        getUpcoming: getUpcoming,
        get: function (taskId) {
            return tasks[taskId];
        }
}
}]);
