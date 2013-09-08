define(['backbone', 'collections/users', 'models/user', 'text!templates/home.html'], function(Backbone, Users, user, homeTemplate){
	
	App.Views.Users = Backbone.View.extend({
		el: '#container',
	
		events: {
			'click #add_user': 'adduser'
		},

		initialize: function(){
			_.bindAll(this, 'render');
			this.collection = new Users();
			this.model = user;
			this.collection.fetch({reset: true});
			this.collection.on('reset', this.render);
			this.collection.bind('add', this.render);
			console.log(this.collection);
			//this.render();
		},

		render: function(){
			console.log(this.collection.length);
			this.$el.html(_.template(homeTemplate, {users: this.collection.models}));
		},

		adduser: function(){
			var first_name = $('#first_name').val();
			var last_name = $('#last_name').val();
			var age = $('#age').val();
			var users = this.collection;
			console.log(this.collection);
			
			users.create({
				'first_name': first_name, 
				'last_name': last_name, 
				'age': age
			});
			//this.model.sync();
			console.log('add user fired');
		}

	});

	return App.Views.Users;

});