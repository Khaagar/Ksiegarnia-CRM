export default class ManageController{
    constructor(ManageService,TranslateService,$mdDialog,UpdateService,$rootScope,LoginService){
        this.ManageService = ManageService;
        this.TranslateService = TranslateService;
        this.$mdDialog = $mdDialog;
        this.UpdateService = UpdateService;
        this.LoginService = LoginService;
        this.$rootScope = $rootScope;
        this.tabs = this.ManageService.getTabs();
        this.data = [];
        this.columnHeaders = [];
        this.newItem = [];
        this.getData("authors");
        
        
        }
    
    getData(category){
        this.data = this.UpdateService.getData(category)['data'];
        this.columnHeaders = this.UpdateService.getData(category)['columns'];
    }

    deleteItem(item,category){
        this.data = this.UpdateService.deleteItem(item,category);
        
    }

    editDialog(ev, id, columnHeaders, tabName){
        var a=this;
        a.columnHeaders = columnHeaders;
            a.$mdDialog.show({
                template: require('./editDialog/editDialog.html'),
                controller: 'editDialogController',
                controllerAs: 'edit',
                parent: angular.element(document.body),
                targetEvent: ev,
                locals: {id: id, columnHeaders: columnHeaders, tabName: tabName},
                clickOutsideToClose:true
            }).then(function(hide){
                a.getData(tabName);

            },function(close){});
        
    }
    translate(word){
        return this.TranslateService.translate([word])[0]['value'];
    }

    checkLoggedUser(){
        return this.LoginService.checkLoggedUser();
            
        
    }
}

ManageController.$inject = ['ManageService','TranslateService','$mdDialog','UpdateService','$rootScope','LoginService'];

