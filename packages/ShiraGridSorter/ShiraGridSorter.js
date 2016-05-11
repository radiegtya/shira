ShiraGridSorter = {
    state: new ReactiveDict(),
    getSort: function(){
        return this.state.get('sort')?this.state.get('sort'):{createdAt: -1};
    },
    setSort: function(key){
        var sort = {};
        if(!this.state.get('sort') || this.state.get('sort')[key] == -1){
            sort[key] = 1;
            this.state.set('sort', sort);
        }else{
            sort[key] = -1;
            this.state.set('sort', sort);     
        }
    },
    sortClass: function(key){
        if(!this.state.get('sort') || !this.state.get('sort')[key])
            return '';
        else if(this.state.get('sort')[key] == -1)
            return 'desc';
        return 'asc';
    }
}

/**
 * Don't edit this if you don't know what exactly are you doing 
 */
Template.registerHelper('ShiraGridSorterClass', function (key) {
    return ShiraGridSorter.sortClass(key);
});