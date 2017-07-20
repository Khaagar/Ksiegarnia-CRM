export default class ManageController{
    constructor(TabsService,TranslateService,$mdDialog,UpdateService,$rootScope,LoginService, $timeout){
        this.TabsService = TabsService;
        this.TranslateService = TranslateService;
        this.$mdDialog = $mdDialog;
        this.UpdateService = UpdateService;
        this.LoginService = LoginService;
        this.$rootScope = $rootScope;
        this.$timeout = $timeout;

        this.tabs = this.TabsService.getTabs();
        this.data = [];
        this.columnHeaders = [];
        this.newItem = [];
        this.hotData = [];
        this.getData("authors");
        
        
        }
    
    getData(category){
        var vm=this;
        vm.$rootScope.loading=true;
        vm.delay = Math.floor((Math.random()*2500)+500);
        this.$timeout(function(){ 
            vm.$rootScope.loading=false;
            vm.hotData = vm.UpdateService.getData('hotBooks')['data'];
            vm.data = vm.UpdateService.getData(category)['data'];
            vm.columnHeaders = vm.UpdateService.getData(category)['columns'];
        },vm.delay);
    }

    deleteItem(index,category,){
        if (category=='hotBooks'){
            this.hotData = this.UpdateService.deleteItem(index,category);   
        } else {
            this.data = this.UpdateService.deleteItem(index,category);   
        }
    }

    editDialog(ev, id, columnHeaders, tabName, tpl){
        var a=this;
        a.columnHeaders = columnHeaders;
            a.$mdDialog.show({
                template: require('./editDialog/'+tpl+'Dialog.html'),
                controller: 'editDialogController',
                controllerAs: 'edit',
                parent: angular.element(document.body),
                targetEvent: ev,
                locals: {id: id, columnHeaders: columnHeaders, tabName: tabName, tpl: tpl},
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
    swapItems(itemFrom,itemTo,category){
        this.data = this.UpdateService.swapItems(itemFrom,itemTo,category);
    }

    addToHot(itemFrom,category){
        this.hotData = this.UpdateService.addToHot(itemFrom,category);
    }

    getSetting(){
        return this.PaginationService.getSettings();
    }

}

ManageController.$inject = ['TabsService','TranslateService','$mdDialog','UpdateService','$rootScope','LoginService', '$timeout' ];

