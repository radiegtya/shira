How to use:

in your html file, call this template alongside it's options

```
<template name="myTemplate">
{{> ShiraPagination options=options}}
</template>
```

set the options via js
```javascript
Template.myTemplate.helpers({
  options: {
    count: 100,
    limit: 20
  }
});

```

then it will make a nice pagination for you!


and you can call n use the available data
```javascript
ShiraPagination.data()
```

it will produce an object
```
{
    limit: limit, //limit for query
    totalPages: totalPages, //total of available pages
    pages: pages, //pages number in array format
    currPage: currPage, //current active page
    skip: skip, //skip or offset for query
}
```