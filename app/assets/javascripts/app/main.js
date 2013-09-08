require.config({
    shim: {
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },
    paths: {
        jquery: 'lib/jquery',
        backbone: 'lib/backbone',
        underscore: 'lib/underscore',
        text: 'lib/text',
        templates: 'templates',
        router: 'router'
    }
});

// Kicking off the app 
App = {
    Collections: {},
    Models: {},
    Views: {}
};
require(['router'], function (router) {
    new router();
});