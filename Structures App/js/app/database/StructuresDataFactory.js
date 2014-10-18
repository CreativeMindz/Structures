app.factory('StructuresDataFactory', ['$http', function ($http) {

    var urlBase = 'http://api.everlive.com/v1/';
    var dataBase = 'Structures';
    var apiKey = 'Yw9zsNdqzNvaKTsv';
    var el = new Everlive(apiKey);
    var structures = el.data(dataBase);
    var query = new Everlive.Query()
    var StructuresDataFactory = {};


    StructuresDataFactory.getStructures = function () {
        var fieldsConfig = {
            "Category": {
                "ReturnAs": "Category",
                "Fields": {
                    "Name": 1,
                }
            },
            "Status": {
                "ReturnAs": "Status",
                "Fields": {
                    "Name": 1,
                }
            }
        };
        var headersConfig = {
            headers: {
                "X-Everlive-Expand": JSON.stringify(fieldsConfig)
            }
        };

        return $http.get(urlBase + apiKey + '/' + dataBase + '/', headersConfig);
        //EVRLIVE method
        //return structures.expand(fieldsConfig).get();
    };

    StructuresDataFactory.getStructure = function (id) {
        var fieldsConfig = {
            "Category": {
                "ReturnAs": "Category",
                "Fields": {
                    "Name": 1,
                }
            },
            "Status": {
                "ReturnAs": "Category",
                "Fields": {
                    "Name": 1,
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

    StructuresDataFactory.insertStructure = function (structure) {
        //EVRLIVE method
        //var result = structures.create(structure,
        //    function (data) {
        //        alert(JSON.stringify(data);
        //    },
        //    function (error) {
        //        alert(JSON.stringify(error);
        //    });

        //return result;
       return $http.post(urlBase + apiKey + '/' + dataBase + '/', structure);
    };

    //TODO fix
    StructuresDataFactory.updateStructure = function (id, structure) {
        return $http.put(urlBase + apiKey + '/' + dataBase + '/' + id, structure)
    };

    //TODO fix
    StructuresDataFactory.deleteStructure = function (id) {
        return $http.delete(urlBase + apiKey + '/' + dataBase + '/' + id);
    };

    return StructuresDataFactory;
}]);