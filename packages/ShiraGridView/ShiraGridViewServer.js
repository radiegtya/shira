Meteor.publish('ShiraGridViewPublish', function (collection, selector, options) {
    var counterSelector = selector;
    delete counterSelector.limit;
    Counts.publish(this, collection, Mongo.Collection.get(collection).find(counterSelector), { noReady: true });
    
    return Mongo.Collection.get(collection).find(selector, options);
});