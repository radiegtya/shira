class posts extends BlazeComponent{

  onCreated(){
    this.dataProvider = DataProvider(Posts);

    // this.dataProvider2 = DataProvider(Posts);
    // this.dataProvider2.selector.set({title: "posts 99"});

    this.autorun(()=>{
      const selector = this.dataProvider.selector.get();
      const options = this.dataProvider.options.get();

      // const selector2 = this.dataProvider2.selector.get();
      // const options2 = this.dataProvider2.options.get();

      // console.log(selector, options)

      this.subscribe('posts', selector, options);
      // this.subscribe('posts', selector2, options2);
    });
  }

  columns(){
    return [
      'title',
      'description',
      {
        title: "Judul",
        name: "title"
      },
      {
        title: "Deskripsi",
        name: "description",
        value: (val)=>{
          return "Description: "+ val;
        }
      },
      {
        title: "Action",
        template: "myTemplate"
      }
    ]
  }

  handleChangeText(e){
    const val = e.target.value;
    this.dataProvider.selector.set({title: e.target.value});
  }

}

posts.register('posts');
