class CybermantraPagination extends BlazeComponent{

  onCreated(){
    super.onCreated();

    //Available props
    const {dataProvider} = this.currentData();
    this.dataProvider = dataProvider;


  }

  /** to show pages number available **/
  pages(){
    const dataProvider = this.dataProvider;
    const totalPages = Math.ceil(dataProvider.count() / dataProvider.options().limit);
    let pages = [];
    const currPage = dataProvider.currPage();
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
    const dataProvider = this.dataProvider;
    const page = this.currentData();

    return dataProvider.currPage() == Number(page)? "active": "disabled";
  }

  /**
  * EVENTS HANDLER
  */

  handleChangePage(){
    const dataProvider = this.dataProvider;
    const options = dataProvider.options();
    const page = this.currentData();

    //reactively change currPage for page activeClass and paginationData
    dataProvider.currPage(page);

    //reactively change options.skip for query options
    options.skip = 0;
    dataProvider.options(options);

    console.log(dataProvider)
  }

}

CybermantraPagination.register('CybermantraPagination');
