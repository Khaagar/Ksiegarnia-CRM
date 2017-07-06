export default class ManageController{
    constructor(ManageService){
        this.manageService = ManageService;
        this.books = this.manageService.getBooks();
        }
    }

ManageController.$inject = ['ManageService'];

