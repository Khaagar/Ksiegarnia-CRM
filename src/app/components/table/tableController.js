
export default class TableController{
    
    constructor(TableService){
        this.tableService= TableService;
        this.books = this.tableService.getBooks();
        }
    }

TableController.$inject = ['TableService'];

