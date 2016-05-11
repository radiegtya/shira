Meteor.publish('ShiraGridViewPublish', function (collection, selector, options) {
    Counts.publish(this, collection, Mongo.Collection.get(collection).find(), { noReady: true });
    return Mongo.Collection.get(collection).find(selector, options);
});