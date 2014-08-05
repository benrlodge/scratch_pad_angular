
app.controller("PreviewController", function($scope, $firebase) {

	// Fire it up
    var fireRef = new Firebase("https://incandescent-fire-3534.firebaseio.com/");    
	var sync = $firebase(fireRef);
	$scope.notes = sync.$asArray();


	$scope.activeNotes = function (note) {
    	return (note.status === 'active');
	}

	$scope.addNote = function(){
		log('Adding a new note');

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





