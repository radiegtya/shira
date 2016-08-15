var Container = {
    state: new ReactiveDict(),
    data: function (id, options) {
        var count = options.count;
        var limit = options.limit;
        var totalPages = Math.ceil(count / limit);
        var pages = [];
        var currPage = this.state.get('currPage' + id);
        var skip = (currPage - 1) * limit;

        if (currPage > 4) {
            for (var i = currPage - 3; i <= currPage + 3; i++) {
                if (i <= totalPages)
                    pages.push(i);
            }
        } else if(totalPages < 7) {
            for (var i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            for (var i = 1; i <= 7; i++) {
                pages.push(i);
            }
        }

        var data = {
            limit: limit,
            totalPages: totalPages,
            pages: pages,
            currPage: currPage,
            skip: skip,
        };

        this.state.set('data' + id, data)

        return data;
    }
};

Template.ShiraPagination.onCreated(function () {
    var id = Template.currentData().id;
    Container.state.set('currPage' + id, 1);
    Container.state.set('prev' + id, null);
    Container.state.set('data' + id, null);
});

Template.ShiraPagination.helpers({
    data: function () {
        var id = this.id;
        var options = this.options;
        var data = Container.data(id, options);
        return data;
    },
    activeClass: function () {
        var id = Template.parentData().id;
        var currPage = Container.state.get('currPage' + id);
        if (currPage == Number(this))
            return 'active';
        return 'disabled';
    }
});

Template.ShiraPagination.events({
    'click .btnPages': function (e) {
        e.preventDefault();
        var id = Template.parentData().id;
        Container.state.set('currPage' + id, Number(this));
    },
    'click #btnPrev': function (e) {
        e.preventDefault();
        var id = Template.parentData().id;
        var currPage = Container.state.get('currPage' + id);
        if (currPage > 1)
            Container.state.set('currPage' + id, currPage - 1);
    },
    'click #btnNext': function (e) {
        e.preventDefault();
        var id = Template.parentData().id;
        var data = Container.data(id, this.options);
        if (data.currPage < data.totalPages)
            Container.state.set('currPage' + id, data.currPage + 1);
    },
    'click #btnFirst': function (e) {
        e.preventDefault();
        var id = Template.parentData().id;
        Container.state.set('currPage' + id, 1);
    },
    'click #btnLast': function (e) {
        e.preventDefault();
        var id = Template.parentData().id;
        var data = Container.data(id, this.options);
        Container.state.set('currPage' + id, data.totalPages);
    },
});

ShiraPagination = {
    data: function (id) {
        return Container.state.get('data' + id) ? Container.state.get('data' + id) : {skip: 0};
    }
};
