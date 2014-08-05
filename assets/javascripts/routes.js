// ROUTES


app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
 
	.state('home', {
	  url: '/',
	  views: {
      	"inner-viewLeft": { 
      		templateUrl: "assets/partials/notes/notes-entry.html",
      		controller: 'PreviewController'
      	},
        
        "inner-viewRight": { 
        	templateUrl: "assets/partials/notes/notes-list-active.html",
        	controller: 'PreviewController'
        }

	  }
	})


	.state('note', {
		url: '/notes/:id',
	    views: {
	      	"inner-viewLeft": { 
	      		templateUrl: "assets/partials/notes/notes-entry.html",
	      		controller: 'PreviewController'
	      	},
	        
	        "inner-viewRight": { 
	        	templateUrl: "assets/partials/notes/show-note.html",
	        	controller: 'NoteController'
	        }
		}
	})



	// .state('archive', {
	//   url: '/notes/archive',
	//   views: {
 //      	"inner-viewLeft": { 
 //      		templateUrl: "assets/partials/notes/notes-entry.html",
 //      		controller: 'PreviewController'
 //      	},
        
 //        "inner-viewRight": { 
 //        	// templateUrl: "assets/partials/notes/notes-list-archive.html",
 //        	// controller: 'archiveController'
 //        }

	//   }
	// });


	

 //   $urlRouterProvider.otherwise('/');

});