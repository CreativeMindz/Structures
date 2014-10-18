'use strict';

//angular.module('structuresApp.services', [])
app.factory('TasksService', [function () {
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

    var tasks = [{
        id: 1,
        date: '10/09/2014 10:30',
        duration: '00:30',
        content: 'Motivate yourself with a quick ** for your success until now',
        goal: 'Structures',
        structure: 'Coding',
        categoryName: 'education',
        repeatType: repeatType.weekly,
        status: statusType.completed
    }, {
        id: 2,
        date: '10/09/2014 11:30',
        duration: '00:30',
        content: 'Read something useful to improve your skills',
        goal: 'Structures',
        structure: 'Coding',
        categoryName: 'profession',
        categoryStatus: 'completed',
        repeatType: repeatType.daily,
        status: statusType.pending
    }, {
        id: 3,
        date: '10/09/2014 14:00',
        duration: '00:30',
        content: 'Train or just relax on fresh air',
        goal: 'Structures',
        categoryName: 'fitness',
        structure: 'Coding',
        repeatType: repeatType.monthly,
        status: statusType.missed
    }, {
        id: 4,
        date: '10/09/2014 06:30',
        duration: '00:30',
        content: 'Wake up early',
        goal: 'Structures',
        categoryName: 'self-development',
        structure: 'Coding',
        repeatType: repeatType.daily,
        status: statusType.completed
    }, {
        id: 5,
        date: '10/11/2014 20:30',
        duration: '00:30',
        content: 'Relax with friends',
        categoryName: 'self-development',
        goal: 'Structures',
        structure: 'Coding',
        repeatType: repeatType.weekly,
        status: statusType.completed
    }];

    return {
        all: function () {
            return tasks;
        },
        get: function (taskId) {
            return tasks[taskId];
        }
    }
}]);
