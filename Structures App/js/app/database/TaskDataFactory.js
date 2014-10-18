app.factory('TasksDataFactory', ['$http', function ($http) {

    var urlBase = 'http://api.everlive.com/v1/';
    var dataBase = 'Tasks';
    var apiKey = 'Yw9zsNdqzNvaKTsv';
    var TasksDataFactory = {};

    TasksDataFactory.getTasks = function () {
        var fieldsConfig = {
            "Structure": {
                "ReturnAs": "Structure",
                "Fields": {
                    "Name": 1,
                    "Category": 1
                }
            }
        };
        var headersConfig = {
            headers: {
                "X-Everlive-Expand": JSON.stringify(fieldsConfig)
            }
        };
        return $http.get(urlBase + apiKey + '/' + dataBase + '/', headersConfig);
    };

    TasksDataFactory.getTask = function (id) {
        var fieldsConfig = {
            "Structure": {
                "ReturnAs": "Structure",
                "Fields": {
                    "Name": 1,
                    "Category": 1
                }
            }
        }
        var headersConfig = {
            headers: {
                "X-Everlive-Expand": JSON.stringify(fieldsConfig)
            }
        };
        return $http.get(urlBase + apiKey + '/' + dataBase + '/' + id, headersConfig);
    };

    //TODO fix
    TasksDataFactory.insertTask = function (task) {
        return $http.post(urlBase + apiKey + '/' + dataBase + '/' + id, task);
    };

    //TODO fix
    TasksDataFactory.updateTask = function (id) {
        return $http.put(urlBase + apiKey + '/' + dataBase + '/' + id, id)
    };

    //TODO fix
    TasksDataFactory.deleteTask = function (id) {
        return $http.delete(urlBase + apiKey + '/' + dataBase + '/' + id);
    };

    return TasksDataFactory;
}]);