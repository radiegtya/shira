var Container = {
    state: new ReactiveDict(),
    props: function () {
        return Template.currentData();
    },
    data: function (props) {
        var collection = Mongo.Collection.get(props.collection);
        var selector = props.selector ? props.selector : {};
        var options = props.options ? props.options : {};
        options.skip = 0; //always set 0 for client
        var data = props.data;
        var titleRows = [];
        var rows = [];
        var pagination = ShiraPagination.data();

        //fetch titleRows
        for (var i = 0; i < data.length; i++) {
            var title = data[i].title;
            titleRows.push(title);
        }

        //fetch rows
        var models = collection.find(selector, options);
        var j = 1 + ((pagination.currPage - 1) * options.limit);
        models.forEach(function (obj) {
            var type = 'data';
            var getValues = function () {
                var values = [];
                for (var i = 0; i < data.length; i++) {
                    var name = data[i].name;

                    values[i] = "";
                    if (!data[i].value && name) {
                        values[i] = obj[name];
                    } else if (data[i].value) {
                        var doc = obj[name] ? obj[name] : '';
                        var value = data[i].value(doc);
                        values[i] = value;
                    }else if(data[i].template){
                        values[i] = {template: data[i].template};
                    }
                    
                }
                return values;
            };

            rows.push({
                number: j,
                values: getValues(),
            });
            j++;
        });

        return {
            titleRows: titleRows,
            rows: rows,
        };
    }
};

Template.ShiraGridView.onCreated(function () {
    var self = this;
    self.autorun(function () {
        var props = Container.props();
        props.options.skip = ShiraPagination.data().skip;
        self.subscribe('ShiraGridViewPublish', props.collection, props.selector, props.options);
    });
});

Template.ShiraGridView.helpers({
    data: function () {
        var data = Container.data(this);
        return data;
    },
    paginationOptions: function () {
        var options = this.options;
        return {
            count: Counts.get(this.collection),
            limit: options.limit
        };
    }
});

Template.ShiraGridView.events({
});

ShiraGridView = {
    data: function () {
        return Container.state.get('data');
    }
};