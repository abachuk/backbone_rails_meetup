define(['backbone', 'text!templates/about.html'], function(Backbone, aboutTemplate){

	App.Views.About = Backbone.View.extend({
		el: '#container',
		initialize: function(){
			//_.bindAll('render', this);
			this.render();
		},
		render: function(){
			this.$el.html(_.template(aboutTemplate));
		}
	});

	return App.Views.About;

});
