var myDataRef = new Firebase('https://cd3rkc8sgaj.firebaseio-demo.com/');

var app = angular.module('NotesApp', ['ngRoute', 'firebase']);





// ROUTES

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'assets/javascripts/templates/home.html',
                controller: 'PreviewController'
            }).
            when('/notes/:', {
                templateUrl: 'assets/javascripts/templates/home.html',
                controller: 'PreviewController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);






// CONTROLLERS

app.controller("PreviewController", function($scope, $firebase) {

	// Fire it up
    var fireRef = new Firebase("https://incandescent-fire-3534.firebaseio.com/");    
	var sync = $firebase(fireRef);
	$scope.notes = sync.$asArray();


	$scope.activeNotes = function (note) {
    	return (note.status === 'active');
	}

	$scope.archivedNotes = function (note) {
    	return (note.status === 'archived');
	}

	$scope.addNote = function(){
		$scope.notes.$add({
			title: $scope.newTitle,
			content: $scope.newContent,
			status: 'active'
		});
		$scope.clearNoteInput('focus');
	}

	$scope.editNote = function(id){
	}


	$scope.archiveNote = function(id){
		id.status = 'archived';
		$scope.notes.$save(id);
	}




	$scope.destroyNote = function (id) {
		log('destorying note' + id);
		$scope.notes.$remove(id);
	};


	// Helpers
	$scope.clearNoteInput = function(state){
		$('.m-notes-form--input-title').val('');
		$('.m-notes-form--input-content').val('');
		if (state === 'focus'){
			$('.m-notes-form--input-title').focus();	
		}	
	}

    // Bind the app to the firebase provider.
    $scope.app = $firebase(fireRef);    

  });





