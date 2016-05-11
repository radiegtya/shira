Meteor.publish('todos', function (selector, options) {
    return Todos.find(selector, options);
});

Meteor.methods({
    'todosFaker': function(){
        for(var i = 0;i<500000;i++){
            Todos.insert({item: "todos " + i, status: false, createdAt: new Date()});
        }
    }
})