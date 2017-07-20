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
        vm.delay = Math.floor((Math.random()*2500)+500);
        this.$timeout(function(){ 
            vm.$rootScope.loading=false;
            vm.books = vm.UpdateService.getData(category)['data'];
            vm.columns = vm.UpdateService.getData(category)['columns'];
        },vm.delay);
    }
    translate(word){
        return this.TranslateService.translate([word])[0]['value'];
    }

    isHot(book){
        this.hotBooks = this.UpdateService.getData('hotBooks')['data'];
        if (this.hotBooks.find(x=>x['id']==book['id'])){
            return true;
        } else return false;
    }

}
HomeController.$inject = ['UpdateService','$mdDialog','TranslateService','$rootScope','$timeout'];

