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

  /**
  * set currPage and options.skip reactively
  */
  _setPage(dataProvider, page){
    //change currPage
    dataProvider.currPage.set(page);

    //change options.skip for query options
    const options = dataProvider.options.get();
    options.skip = (page - 1) * options.limit;
    dataProvider.options.set(options);
  }

  handleChangePage(e){
    e.preventDefault();
    const {dataProvider} = this.data();
    const page = this.currentData();

    this._setPage(dataProvider, page);
  }

  handleFirst(e){
    e.preventDefault();
    const {dataProvider} = this.currentData();

    this._setPage(dataProvider, 1);
  }

  handlePrevious(e){
    e.preventDefault();
    const {dataProvider} = this.currentData();
    const currPage = dataProvider.currPage.get();
    if(currPage > 1)
      this._setPage(dataProvider, currPage - 1);
  }

  handleNext(e){
    e.preventDefault();
    const {dataProvider} = this.currentData();
    const currPage = dataProvider.currPage.get();
    const count = dataProvider.count.get();
    const limit = dataProvider.options.get().limit;
    const totalPages = Math.ceil(count / limit);
    if(currPage < totalPages)
      this._setPage(dataProvider, currPage + 1);
  }

  handleLast(e){
    e.preventDefault();
    const {dataProvider} = this.currentData();
    const count = dataProvider.count.get();
    const limit = dataProvider.options.get().limit;
    const totalPages = Math.ceil(count / limit);
    this._setPage(dataProvider, totalPages);
  }

}

CybermantraPagination.register('CybermantraPagination');
