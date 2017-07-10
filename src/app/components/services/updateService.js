export default class UpdateService{
    
    constructor(BooksService,AuthorsService){
        this.BooksService = BooksService;
        this.AuthorsService = AuthorsService;
    }

    setData(){
            this.BooksService.setBooks();
            this.AuthorsService.setAuthors();        
    }        

    }

UpdateService.$inject = ['BooksService','AuthorsService'];