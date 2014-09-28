
app.controller("NoteController", function($scope, $firebase, $stateParams) {

	// Fire it up
    var fireRef = new Firebase("https://incandescent-fire-3534.firebaseio.com/");    
	var sync = $firebase(fireRef);
	$scope.notes = sync.$asArray();

	
	$scope.record = $stateParams.id;
	log('id: ' + $stateParams.id)
	log($scope);



	$scope.archiveNote = function(id){
		id.status = 'archived';
		$scope.notes.$save(id);
	}


	$scope.destroyNote = function (id) {
		log('destorying note' + id);
		$scope.notes.$remove(id);
	};

    // Bind the app to the firebase provider.
    $scope.app = $firebase(fireRef);    

  });





