export default class ManageController{
    constructor(ManageService){
        this.ManageService = ManageService;
        this.tabs = this.ManageService.getTabs();
        this.data = [];
<<<<<<< HEAD
        };
    

    getData(category){
        this.data = JSON.parse(localStorage.getItem(category));
=======
        this.columnHeaders = [];
        }
    
    getData(category){
        this.data = JSON.parse(localStorage.getItem(category));
        this.columnHeaders = [];
        for (var key in this.data[0]){
            this.columnHeaders.push(key);
        }  
>>>>>>> commit 10.07
    }
}

    deleteItem(item,category){
        console.log(item.id);
        console.log(category);
        this.data.splice(this.data.indexOf(item),1);
        localStorage.setItem(category,angular.toJson(this.data));
    }
}

ManageController.$inject = ['ManageService'];

