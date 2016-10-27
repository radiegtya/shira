Meteor.publish('posts', function (selector, options) {
    var selector = selector || {};
    var options = options || {};
    console.log('subscribe posts',selector, options)

    return Posts.find(selector, options);
});

Meteor.methods({
    'postsFaker': function(){
        for(var i = 0;i<100;i++){
            Posts.insert({title: "posts " + i, description: "description " + i, createdAt: new Date()});
        }
    }
})
