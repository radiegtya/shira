DataProvider = function(collection){
  return {
    collection: collection,
    selector: new ReactiveVar({}),
    options: new ReactiveVar({
      sort: {createdAt: -1},
      limit: 5,
      skip: 0
    }),
    count: new ReactiveVar(0),
    currPage: new ReactiveVar(1)
  }
}
