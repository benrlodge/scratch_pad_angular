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
			content: 'Because it is really good. duh.'
		},
		{
			id: 1,
			title: 'Why does 5+5 = 10',
			content: 'Because Math said so'
		},
		{
			id: 2,
			title: 'Why is the sky is blue',
			content: 'Because it was painted blue'
		},
		{
			id: 3,
			title: 'I like karate',
			content: 'Yea, totally.'
		}
	]


});




