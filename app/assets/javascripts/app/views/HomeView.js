define(['backbone', 'collections/users', 'models/user', 'text!templates/home.html'], function(Backbone, Users, user, homeTemplate){
	
	App.Views.Users = Backbone.View.extend({
		el: '#container',
	
		events: {
			'click #add_user': 'adduser',
			'click .delete': 'delete'
		},

		initialize: function(){
			_.bindAll(this, 'render');
			this.collection = new Users();
			this.model = user;
			this.collection.fetch({reset: true});
			//this.collection.on('reset', this.render);
			//this.collection.bind('add', this.render);
			this.collection.bind('all', this.render);
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
		},

		delete: function(e){
			var clickedID = $(e.currentTarget).parent().attr('id');
			var user = this.collection.get(clickedID);
			user.destroy();
			this.collection.remove(clickedID);

			console.log(user);
		}

	});

	return App.Views.Users;

});