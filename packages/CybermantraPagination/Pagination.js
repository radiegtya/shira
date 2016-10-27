const key = "Cybermantra.PaginationStore";
const selectorKey = key + ".selector.";
const optionsKey = key + ".options.";

class CybermantraPagination extends BlazeComponent{

  onCreated(){
    super.onCreated();
  }

  /** to show pages number available **/
  pages(){
    let pages = [];
    let currPage = 1;
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

}

CybermantraPaginationStore = {


}

CybermantraPagination.register('CybermantraPagination');
