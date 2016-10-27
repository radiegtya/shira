// DataProvider = new ReactiveField({
//   id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
//   selector: {},
//   options: {
//     sort: {createdAt: -1},
//     limit: 5,
//   },
//   count: 0
// });

DataProvider = function(collection){
  return {
    collection: collection,
    selector: new ReactiveField({}),
    options: new ReactiveField({
      sort: {createdAt: -1},
      limit: 5,
    }),
    count: new ReactiveField(0)
  }
}
