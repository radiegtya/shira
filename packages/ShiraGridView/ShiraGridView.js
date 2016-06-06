var Container = {
    state: new ReactiveDict(),
    props: function () {
        return Template.currentData();
    },
    data: function (props) {
        var collection = Mongo.Collection.get(props.collection);

        //use reactive selector if exists
        var selector = props.selector ? props.selector : {};
        var reactiveSelector = Container.state.get('selector');
        if (reactiveSelector)
            selector = reactiveSelector;

        //use reactive options if exists
        var options = props.options ? props.options : {};
        options.skip = 0; //always set 0 for client
        var reactiveOptions = Container.state.get('options');
        if (reactiveOptions)
            options = reactiveOptions;

        var data = props.data;
        var titleRows = [];
        var rows = [];
        var pagination = ShiraPagination.data();

        //fetch titleRows
        for (var i = 0; i < data.length; i++) {
            var title = data[i].title;
            var name = data[i].name;
            var value = data[i].value;
            var template = data[i].template;
            titleRows.push({title: title, name: name, value: value, template: template});
        }

        //fetch rows
        var models = collection.find(selector, options);
        var j = 1 + ((pagination.currPage - 1) * options.limit);
        models.forEach(function (obj) {
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
                    } else if (data[i].template) {
                        values[i] = {template: data[i].template, templateData: obj};
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
            isEmpty: rows.length == 0 ? true : false
        };
    }
};

Template.ShiraGridView.onCreated(function () {
    var self = this;
    self.autorun(function () {
        var props = Container.props();

        //use reactive selector if exists
        var selector = props.selector ? props.selector : {};
        var reactiveSelector = Container.state.get('selector');
        if (reactiveSelector)
            selector = reactiveSelector;

        //use reactive options if exists
        var options = props.options ? props.options : {};
        options.skip = ShiraPagination.data().skip;
        options.sort = ShiraGridSorter.getSort();
        var reactiveOptions = Container.state.get('options');
        if (reactiveOptions)
            options = reactiveOptions;

        self.subscribe('ShiraGridViewPublish', props.collection, selector, options);
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
    },
    showSearchField: function () {
        if (this.value || this.template)
            return false;
        return true;
    }
});

Template.ShiraGridView.events({
    'click #btnSort': function (e) {
        var data = e.target.getAttribute('data');
        ShiraGridSorter.setSort(data);
    },
    'submit #searchForm': function (e) {
        e.preventDefault();
        var selector = this.selector;

        //fetch titleRows
        for (var i = 0; i < this.data.length; i++) {
            if (!this.data[i].value && !this.data[i].template) {
                var name = $(e.target).find('#' + this.data[i].name).val();
                selector[this.data[i].name] = {$regex: name, $options: 'i'};
            }
        }

        //reset to 0 every searching doc, if only 1 data exists
        if(ShiraPagination.data().totalPages == 1){
          var options = this.options;
          options.skip = 0;
          Container.state.set('options', options);
        }

        Container.state.set('selector', selector);
    }
});

ShiraGridView = {
    data: function () {
        return Container.state.get('data');
    },
    selector: function () {
        return Container.state.get('selector');
    }
};
