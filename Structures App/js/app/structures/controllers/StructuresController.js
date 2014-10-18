'use strict';

app.controller('StructuresController', ['$scope', 'StructuresService',
    function ($scope, StructuresService) {
        //StructuresService.all(function (data) {
        //    console.log(data);
        //    $scope.structures = data;
        //});

        //var structureData = {
        //    "Name": "Test",
        //    "Category": "CategoryTest"
        //};
        //StructuresService.create(structureData);

        $scope.structures = [
        	{title: 'Try to be more social', count: 17, category: 'personal' },
        	{title: 'Telerik Exams', count: 12, category: 'education', goal:'Finish Telerik Academy' },
        	{title: 'Become a Senior Developer', count: 13, category: 'profession' },
            {title: 'Eat Healthy', count: 7, category: 'fitness', goal: 'Get healthy and fit' },
            {title: 'Training Program', count: 4, category: 'fitness', goal: 'Get healthy and fit' },
        ];
    }]);