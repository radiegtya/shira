class CybermantraGridView extends BlazeComponent {

  onCreated(){
    super.onCreated();

    //Available props
    const {dataProvider, columns} = this.currentData();
    this.dataProvider = dataProvider;
    this.columns = columns;

    this.autorun(()=>{
      this.subscribe('CybermantraGridViewCounter', dataProvider.collection._name)
    });
  }

  /** private func to change title to proper case **/
  _toTitleCase(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  /** get headerColumns for thead.tr.th **/
  headerColumns(){
    const columns = this.columns;
    let headerColumns = [];
    columns.forEach((obj)=>{
      const title = obj.title? obj.title: obj;

      headerColumns.push(this._toTitleCase(title));
    });

    return headerColumns;
  }

  /** get bodyColumns for tbody.tr **/
  bodyColumns(){
    const dataProvider = this.dataProvider;
    const rows = dataProvider.collection.find(dataProvider.selector(), dataProvider.options());

    return rows;
  }

  /** get bodyColumns.rows for tbody.td **/
  rows(row){
    const columns = this.data().columns;
    let rows = [];

    for(let i = 0; i < columns.length; i++){
      let name = columns[i].name? columns[i].name: columns[i]; //name = use columns.name if exist, else use columns index
      let value = columns[i].value? columns[i].value(row[name]): row[name]; //value = use columns method if exists, else use row[name]
      value = columns[i].template? {template: columns[i].template, templateData: row}: value;

      rows.push(value);
    }

    return rows;
  }

  isEmpty(){
    return this.bodyColumns().count() > 0 ? false: true;
  }

  paginationDataProvider(){
    const dataProvider = this.dataProvider;
    dataProvider.count(Counts.get(dataProvider.collection._name));

    return dataProvider;
  }

}

CybermantraGridView.register("CybermantraGridView");
