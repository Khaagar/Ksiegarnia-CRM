export default class UpdateService{
    
<<<<<<< HEAD
    constructor(BooksService,AuthorsService){
        this.BooksService = BooksService;
        this.AuthorsService = AuthorsService;
    }

    setData(){
            this.BooksService.setBooks();
            this.AuthorsService.setAuthors();        
=======
    constructor(AuthorsService,BooksService,CategoriesService,CountriesService,CoversService,StoragesService){

        this.AuthorsService = AuthorsService;
        this.BooksService = BooksService;
        this.CategoriesService = CategoriesService;
        this.CountriesService = CountriesService;
        this.CoversService = CoversService;
        this.StoragesService = StoragesService;
    }

    setData(){
            this.AuthorsService.setAuthors();
            this.BooksService.setBooks();
            this.CategoriesService.setCategories();
            this.CountriesService.setCountries();
            this.CoversService.setCovers();
            this.StoragesService.setStorages();
>>>>>>> commit 10.07
    }        

    }

<<<<<<< HEAD
UpdateService.$inject = ['BooksService','AuthorsService'];
=======
UpdateService.$inject = ['AuthorsService','BooksService','CategoriesService','CountriesService','CoversService','StoragesService'];
>>>>>>> commit 10.07
