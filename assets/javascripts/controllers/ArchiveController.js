
app.controller("ArchiveController", function($scope, $firebase) {

	// Fire it up
    var fireRef = new Firebase("https://incandescent-fire-3534.firebaseio.com/");    
	var sync = $firebase(fireRef);
	$scope.notes = sync.$asArray();



    // Bind the app to the firebase provider.
    $scope.app = $firebase(fireRef);    

  });





