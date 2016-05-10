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


![alt text](http://content.screencast.com/users/Radiegtya/folders/Jing/media/3cf895ba-4988-4832-9671-1e49056bea9c/00000393.png)


and you can call n use the available data
```javascript
ShiraPagination.data()
```

it will produce an object
```
{
    limit: 20, //limit for query
    totalPages: 5, //total of available pages
    pages: [1,2,3,4,5], //pages number in array format
    currPage: 1, //current active page
    skip: 0, //skip or offset for query
}
```
