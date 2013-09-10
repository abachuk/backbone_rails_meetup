define(['backbone', 'views/HomeView', 'views/AboutView'], function(Backbone, HomeView, AboutView){
	App.Router = Backbone.Router.extend({
		
		initialize: function(){
			console.log('initialize router');
			Backbone.history.start();
		},
		routes: {
			'': 'home',
			'about': 'about'
		},

		'home': function(){
			new HomeView();
		},

		'about': function(){
			new AboutView();
		}
	
	});

	return App.Router;

});