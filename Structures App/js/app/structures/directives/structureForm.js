
// custom structure directive
app.directive('structureForm', function () {
	return {
		templateUrl: 'js/app/structures/directives/structure-form.html',
		restrict: 'E',
		scope: {
			structure: '=',
			save: '&'
		},
		link: function (scope) {
			scope.saveData = function() {
				// todo: future validation
				scope.save(scope.structure);
			};
		}
	};
});