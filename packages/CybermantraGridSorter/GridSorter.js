CybermantraGridSorter = {
    setSort: function(dataProvider, key){
        var options = dataProvider.options.get();
        if(!options.sort[key] || options.sort[key] == -1){
            options.sort = {};
            options.sort[key] = 1;
            dataProvider.options.set(options);
        }else{
            options.sort = {};
            options.sort[key] = -1;
            dataProvider.options.set(options);
        }
    },
    sortClass: function(dataProvider, key){
        var options = dataProvider.options.get();
        if(!options.sort || !options.sort[key])
            return '';
        else if(options.sort[key] == -1)
            return 'desc';
        return 'asc';
    }
}

/**
 * Don't edit this if you don't know what exactly are you doing
 */
Template.registerHelper('CybermantraGridSorterClass', function (dataProvider, key) {
    return CybermantraGridSorter.sortClass(dataProvider, key);
});
