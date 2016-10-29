class CybermantraPagination extends BlazeComponent{

  onCreated(){
    super.onCreated();

    this.autorun(()=>{
      //Available props dataProvider[obj]
    });

  }

  /** to show pages number available **/
  pages(){
    const {dataProvider} = this.currentData();
    const count = dataProvider.count.get();
    const limit = dataProvider.options.get().limit;
    const currPage = dataProvider.currPage.get();
    const totalPages = Math.ceil(count / limit);
    let pages = [];

    if (currPage > 4) {
        for (var i = currPage - 3; i <= currPage + 3; i++) {
            if (i <= totalPages)
                pages.push(i);
        }
    } else if(totalPages < 7) {
        for (var i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
    } else {
        for (var i = 1; i <= 7; i++) {
            pages.push(i);
        }
    }

    return pages;
  }

  activeClass(){
    const {dataProvider} = this.data();
    const page = this.currentData();

    const currPage = dataProvider.currPage.get();

    return currPage == Number(page)? "active": "disabled";
  }

  /**
  * EVENTS HANDLER
  */

  handleChangePage(){
    const {dataProvider} = this.data();
    const page = this.currentData();

    //change currPage for page activeClass and paginationData
    dataProvider.currPage.set(page);

    //change options.skip for query options
    const options = dataProvider.options.get();
    options.skip = (page - 1) * options.limit;
    dataProvider.options.set(options);
  }

}

CybermantraPagination.register('CybermantraPagination');
