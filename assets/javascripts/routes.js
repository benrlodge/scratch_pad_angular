// ROUTES


app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
 


	.state('login', {
	  url: '/',
	  views: {
      	"inner-full": { 
      		templateUrl: "assets/partials/admin/login.html",
      		controller: 'LoginController'
      	}
	  }
	})

	.state('note', {
		url: '/notes/:id',
		controller: 'NoteController',
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


	.state('home', {
	  url: '/dashboard',
	  controller: 'PreviewController',
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
	});


   $urlRouterProvider.otherwise('/');

});