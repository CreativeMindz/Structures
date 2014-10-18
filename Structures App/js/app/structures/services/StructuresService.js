'use strict';

app.factory('StructuresService', ['StructuresDataFactory', function (StructuresDataFactory) {

    var getAllStructures = function (callback) {

        var result = StructuresDataFactory.getStructures()
                    //EVRLIVE method
            //.then(function (structuresList) {
            //    var formattedData = dataFormatter(structuresList);
            //    callback(formattedData);
            //},
            //    function (error) {
            //        return { "status": 'Unable to load structures data: ' + error.message };
            //});
        .success(function (structuresList) {
            var formattedData = dataFormatter(structuresList);
            callback(formattedData);
        })
        .error(function (error) {
            return { "status": 'Unable to load structures data: ' + error.message };
        });

        return result;
    }

    var createStructure = function (data) {
        var result = StructuresDataFactory.insertStructure(data)
            .success(function (result) {
                alert(JSON.stringify(result));
            })
            .error(function (error) {
                alert(JSON.stringify(error));
            });
        //EVRLIVE method
        //var result = StructuresDataFactory.insertStructure(data);

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
        //EVRLIVE method
        //if (data.result instanceof Array) {
        //    dataArray = data.result;
        //} else {
        //    dataArray.push(data.result);
        //}

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
        },
        create: function (data) {
            return createStructure(data);
        }
    }

}]);