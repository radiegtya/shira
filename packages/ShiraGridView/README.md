```
meteor add shira:grid-view
```

How to use:

in your html file, call this template alongside it's options

```
<template name="myGridView">
    {{> ShiraGridView 
      collection="todos"
      selector=selector
      options=options
      data=data
    }}
</template>

<template name="myAction">
    <a class="btn btn-success">View</a>
</template>
```

set the options via js
```javascript
Template.myGridView.helpers({
    selector: function () {
        return {};
    },
    options: function () {
        return {limit: 5, sort: {createdAt: -1}};
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
                template: "myAction"
            },
        ];
    }
});

```

then it will make a nice gridView with TableSorter, dynamic template, and pagination for you!


![alt text](http://content.screencast.com/users/Radiegtya/folders/Jing/media/c0e42349-709d-4802-ba71-96e02a5531b3/00000398.png)


#NOTE
```javascript
You don't need to do manual publish or subscribe data! shira:grid-view will do the magic for you!
```

