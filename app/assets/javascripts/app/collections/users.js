define(['backbone', 'models/user'], function(Backbone, User){

	App.Collections.Users = Backbone.Collection.extend({
		model: User,
		url: '/users'
	});

	return App.Collections.Users;

});