define(['backbone', 'views/HomeView'], function(Backbone, HomeView){
	App.Router = Backbone.Router.extend({
		
		initialize: function(){
			console.log('initialize router');
			Backbone.history.start();
		},
		routes: {
			'': 'home'
		},

		'home': function(){
			new HomeView();
		}
	
	});

	return App.Router;

});