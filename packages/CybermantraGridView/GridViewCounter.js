Meteor.publish('CybermantraGridViewCounter', function (collectionName) {
    Counts.publish(this, collectionName, Mongo.Collection.get(collectionName).find({}));
});
