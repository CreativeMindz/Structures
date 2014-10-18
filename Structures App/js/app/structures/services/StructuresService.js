'use strict';

app.factory('StructuresService', ['StructuresDataFactory', function (StructuresDataFactory) {

    var getAllStructures = function (callback) {

        var result = StructuresDataFactory.getStructures()
            .success(function (structuresList) {
                var formattedData = dataFormatter(structuresList);
                callback(formattedData);
            })
            .error(function (error) {
                return { "status": 'Unable to load structures data: ' + error.message };
            });

        return result;
    }

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
            var tasksCount = currentRecord.Tasks !== undefined ? currentRecord.Tasks.length : 0;
            var formattedRecord = {
                title: currentRecord.Name,
                count: tasksCount,
                category: currentRecord.Category.Name,
                status: currentRecord.Status.Name,
                goal: currentRecord.Description
            }
            formattedData.push(formattedRecord);
        }

        return formattedData;
    }


    return {
        all: function (callback) {
            return getAllStructures(callback);
        }
    }

}]);