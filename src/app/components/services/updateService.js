export default class UpdateService {

    constructor(AuthorsService, BooksService, CategoriesService, CountriesService, CoversService, StoragesService, TranslateService, HotBooksService) {
        this.AuthorsService = AuthorsService;
        this.BooksService = BooksService;
        this.CategoriesService = CategoriesService;
        this.CountriesService = CountriesService;
        this.CoversService = CoversService;
        this.StoragesService = StoragesService;
        this.TranslateService = TranslateService;
        this.HotBooksService = HotBooksService;

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
        this.HotBooksService.setHotBooks();
    }

    deleteItem(id, category) {
        this.data = this.getData(category)['data'];
        this.data.splice(id, 1);
        localStorage.setItem(category, angular.toJson(this.data));
        return this.data;
    }

    swapItems(itemFrom,itemTo,category){
        this.data=this.getData(category)['data'];
        this.idTo = this.data.findIndex(x=>x['id'] == itemTo['id']);
        this.idFrom = this.data.findIndex(x=>x['id'] == itemFrom['id']);
        this.data.splice(this.idTo,1,itemFrom);
        this.data.splice(this.idFrom,1,itemTo);
        localStorage.setItem(category, angular.toJson(this.data));
        return this.data;
    }

    addToHot(itemFrom,category){
        
        this.hotData=this.getData(category)['data'];
        if (!this.hotData.find(x=>x['id'] == itemFrom['id'])){
            this.hotData.push(itemFrom);
        }
        localStorage.setItem(category, angular.toJson(this.hotData));
        return this.hotData;
    }
}

UpdateService.$inject = ['AuthorsService', 'BooksService', 'CategoriesService', 'CountriesService', 'CoversService', 'StoragesService', 'TranslateService','HotBooksService'];
