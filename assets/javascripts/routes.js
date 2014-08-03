// ROUTES


app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
 
	.state('home', {
	  url: '/',
	  controller: 'PreviewController',
	  views: {
      	"viewLeft": { 
      		templateUrl: "assets/partials/notes/notes-entry.html",
      		controller: 'PreviewController'
      	},
        
        "viewRight": { 
        	templateUrl: "assets/partials/notes/notes-list-active.html",
        	controller: 'PreviewController'
        }

	  }
	});


   $urlRouterProvider.otherwise('/');

});