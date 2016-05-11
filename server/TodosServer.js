Meteor.publish('todos', function (selector, options) {
    return Todos.find(selector, options);
});