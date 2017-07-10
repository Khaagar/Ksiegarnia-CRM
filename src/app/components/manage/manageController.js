export default class ManageController{
    constructor(ManageService){
        this.ManageService = ManageService;
        this.tabs = this.ManageService.getTabs();
        this.data = [];
        };
    

    getData(category){
        this.data = JSON.parse(localStorage.getItem(category));
    }
}

ManageController.$inject = ['ManageService'];

