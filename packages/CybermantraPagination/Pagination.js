class CybermantraPagination extends BlazeComponent{

  onCreated(){
    super.onCreated();

    this.autorun(()=>{
      //Available props
      this.props = this.currentData();
    });

  }

  /** to show pages number available **/
  pages(){
    const {dataProvider} = this.props;
    const totalPages = Math.ceil(dataProvider().count / dataProvider().options.limit);
    let pages = [];
    const currPage = dataProvider().currPage;
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
    const {dataProvider} = this.props;
    const page = this.currentData();

    console.log(dataProvider().currPage)

    return dataProvider().currPage == Number(page)? "active": "disabled";
  }

  /**
  * EVENTS HANDLER
  */

  handleChangePage(){
    const {dataProvider} = this.props;
    const page = this.currentData();

    dataProvider().currPage = page; //change currPage for page activeClass and paginationData
    dataProvider().options.skip = (page - 1) * dataProvider().options.limit; //change options.skip for query options
    dataProvider(dataProvider()); //reactively change all
  }

}

CybermantraPagination.register('CybermantraPagination');
