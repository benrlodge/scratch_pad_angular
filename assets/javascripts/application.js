var app = angular.module('NotesApp', ['ngRoute']);



// ROUTES

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'assets/javascripts/templates/home.html',
                controller: 'PreviewController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);





// CONTROLLERS
app.controller("PreviewController", function($scope){

	$scope.notes = [
		{
			id: 0,
			title: 'Why I love cheese',
			content: 'Because it is really good. duh.',
			status: 'active'
		},
		{
			id: 1,
			title: 'Why does 5+5 = 10',
			content: 'Because Math said so',
			status: 'active'
		},
		{
			id: 2,
			title: 'How to do karate kicks',
			content: 'Watch Chuck Norris',
			status: 'archived'
		},

	];

	$scope.activeNotes = function (note) {
    	return (note.status != 'active');
	}
	$scope.archivedNotes = function (note) {
    	return (note.status === 'archived');
	}


	$scope.add = function(){
		$scope.notes.push({
			title: $scope.newTitle,
			content: $scope.newContent,
			status: 'active'
		});

		$('.m-notes-form--input-title').val('').focus();
		$('.m-notes-form--input-content').val('');

	}


});




