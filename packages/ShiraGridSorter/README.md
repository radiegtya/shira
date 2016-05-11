this ShiraGridView extension used for sorting your table header ascending or descending.

how to use in your html view:
```
<th id="btnSort" class="{{ShiraGridSorterClass 'name'}}" data="name">Name</th>
```
how to use in your js events:
```
    Template.accountTypeIndex.events = {
        /* sorting by parameter */
        'click #btnSort': function(e) {
            var data = e.target.getAttribute('data');
            ShiraGridSorter.setSort(data);
        },
    }
```

how to use in your query selector
```
Todos.find({}, {sort: ShiraGridSorter.getSort()})
```