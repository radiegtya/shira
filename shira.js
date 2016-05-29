if (Meteor.isClient) {

    var Container = {
        selector: function () {
            if(ShiraGridView.selector())
                return ShiraGridView.selector();
            else 
                return {};
        },
        options: function () {
            return {limit: 5, sort: {createdAt: -1}};
        },
        data: function () {
            return {
            };
        },
        selectorPosts: function () {
            return {};
        },
        optionsPosts: function () {
            return {limit: 5, sort: {createdAt: -1}};
        },
        dataPosts: function () {
            return {
            };
        },
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
                    name: 'status',
                    value: function (val) {
                        return (val == true) ? 'done' : 'not yet';
                    }
                },
                {
                    title: "Template",
                    template: "myTemplate"
                },
            ];
        },
    });
    
    Template.posts.helpers({
        selectorPosts: function () {
            return Container.selectorPosts();
        },
        optionsPosts: function () {
            return Container.optionsPosts();
        },
        dataPosts: function () {
            return [
                {
                    title: "Title",
                    name: 'title'
                },
            ];
        },
    });

}