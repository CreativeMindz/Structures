'use strict';

app.controller('StructuresController', ['$scope',
    function ($scope) {
    	$scope.structures = [
    		{ title: 'Read', count: 17, category: 'personal', goal: 'Finish Reading the book list' },
    		{title: 'Telerik Exams', count: 12, category: 'education', goal:'Finish Telerik Academy' },
    		{title: 'Become a Senior Developer', count: 13, category: 'profession' },
            {title: 'Eat Healthy', count: 7, category: 'fitness', goal: 'Get healthy and fit' },
            {title: 'Training Program', count: 4, category: 'fitness', goal: 'Get healthy and fit' },
    	];
}]);