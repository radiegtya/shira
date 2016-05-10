if (Meteor.isClient) {
    
    Template.hello.helpers({
        options: function () {
            return {
                count: 10,
                limit: 5
            };
        }
    });
    
}