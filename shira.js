if (Meteor.isClient) {

    var Container = {
        selector: function () {
            return {};
        },
        options: function () {
            return {limit: 5, sort: {createdAt: -1}};
        },
        data: function () {
            return {
            };
        }
    };

    Template.hello.onCreated(function () {
 
    });

    Template.hello.helpers({
        selector: function () {
            return Container.selector();
        },
        options: function () {
            return Container.options();
        },
        data: function () {
            return [
                {
                    title: "Item",
                    name: 'item'
                },
                {
                    title: "Status",
                    name: 'status'
                },
            ];
        }
    });

}