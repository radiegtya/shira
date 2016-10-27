var Container = {
    state: new ReactiveDict(),
    data: function (options) {
        var count = options.count;
        var limit = options.limit;
        var totalPages = Math.ceil(count / limit);
        var pages = [];
        var currPage = this.state.get('currPage');
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

        this.state.set('data', data)

        return data;
    }
};

Template.ShiraPagination.onCreated(function () {
    Container.state.set('currPage', 1);
    Container.state.set('prev', null);
    Container.state.set('data', null);
});

Template.ShiraPagination.helpers({
    data: function () {
        var data = Container.data(this.options);
        return data;
    },
    activeClass: function () {
        var currPage = Container.state.get('currPage');
        if (currPage == Number(this))
            return 'active';
        return 'disabled';
    }
});

Template.ShiraPagination.events({
    'click .btnPages': function (e) {
        e.preventDefault();
        Container.state.set('currPage', Number(this));
    },
    'click #btnPrev': function (e) {
        e.preventDefault();
        var currPage = Container.state.get('currPage');
        if (currPage > 1)
            Container.state.set('currPage', currPage - 1);
    },
    'click #btnNext': function (e) {
        e.preventDefault();
        var data = Container.data(this.options);
        if (data.currPage < data.totalPages)
            Container.state.set('currPage', data.currPage + 1);
    },
    'click #btnFirst': function (e) {
        e.preventDefault();
        Container.state.set('currPage', 1);
    },
    'click #btnLast': function (e) {
        e.preventDefault();
        var data = Container.data(this.options);
        Container.state.set('currPage', data.totalPages);
    },
});

// console.log(Template.currentData())
ShiraPagination = {
    data: function () {
        return Container.state.get('data') ? Container.state.get('data') : {skip: 0};
    }
};
