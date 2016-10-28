DataProvider = function(collection){
  return {
    collection: collection,
    selector: new ReactiveField({}),
    options: new ReactiveField({
      sort: {createdAt: -1},
      limit: 5,
      skip: 0
    }),
    count: new ReactiveField(0),
    currPage: new ReactiveField(1)
  }
}
