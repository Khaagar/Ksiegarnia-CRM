export default class HomeController{
    
    constructor(UpdateService,$mdDialog,TranslateService,$rootScope,$timeout){
        this.$mdDialog=$mdDialog;
        this.UpdateService = UpdateService;
        this.TranslateService = TranslateService;
        this.$rootScope = $rootScope;
        this.$timeout = $timeout;
        this.books = [];
        this.columns = [];
        this.getData("books");
    }
    bookDetails(ev, book){
        
            this.$mdDialog.show({
                template: require('./detailsDialog/detailsDialog.html'),
                controller: 'detailsDialogController',
                controllerAs: 'details',
                parent: angular.element(document.body),
                targetEvent: ev,
                locals: {book: book, columns: this.columns},
                clickOutsideToClose:true,
                
            })
        }
    cancel(){
        this.$mdDialog.cancel();
    }
    
    getData(category){
        var vm=this;
        vm.$rootScope.loading=true;
        this.$timeout(function(){ 
            vm.$rootScope.loading=false;
            vm.books = vm.UpdateService.getData(category)['data'];
            vm.columnHeaders = vm.UpdateService.getData(category)['columns'];
        },1000);
    }
    translate(word){
        return this.TranslateService.translate([word])[0]['value'];
    }

}
HomeController.$inject = ['UpdateService','$mdDialog','TranslateService','$rootScope','$timeout'];

