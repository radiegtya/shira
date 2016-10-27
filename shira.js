class posts extends BlazeComponent{

  onCreated(){
    this.dp = DataProvider(Posts);
    this.dp2 = DataProvider(Posts);

    this.autorun(()=>{
      this.subscribe('posts', this.dp.selector(), this.dp.options());
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

  dataProvider(){
    return this.dp;
  }

  dataProvider2(){
    this.dp2.selector({title: "posts 99"});
    return this.dp2;
  }

}

posts.register('posts');
