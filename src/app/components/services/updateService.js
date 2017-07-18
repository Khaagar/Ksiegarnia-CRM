export default class UpdateService {

    constructor(AuthorsService, BooksService, CategoriesService, CountriesService, CoversService, StoragesService, TranslateService) {
        this.AuthorsService = AuthorsService;
        this.BooksService = BooksService;
        this.CategoriesService = CategoriesService;
        this.CountriesService = CountriesService;
        this.CoversService = CoversService;
        this.StoragesService = StoragesService;
        this.TranslateService = TranslateService;

        this.data = [];
        this.columnHeaders = [];
    }

    getData(category) {
        this.data = JSON.parse(localStorage.getItem(category));
        this.columnHeaders = [];
        for (var key in this.data[0]) {
            this.columnHeaders.push(key);
        }
        this.columnHeaders = this.TranslateService.translate(this.columnHeaders);
        return { "data": this.data, "columns": this.columnHeaders };
    }

    setData() {
        this.AuthorsService.setAuthors();
        this.BooksService.setBooks();
        this.CategoriesService.setCategories();
        this.CountriesService.setCountries();
        this.CoversService.setCovers();
        this.StoragesService.setStorages();
    }

    deleteItem(id, category) {
        this.data = this.getData(category)['data'];
        this.data.splice(id, 1);
        localStorage.setItem(category, angular.toJson(this.data));
        return this.data;
    }
}

UpdateService.$inject = ['AuthorsService', 'BooksService', 'CategoriesService', 'CountriesService', 'CoversService', 'StoragesService', 'TranslateService'];
