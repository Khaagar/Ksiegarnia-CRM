export default class HomeController{
    
    constructor(UpdateService,$mdDialog,TranslateService,$rootScope){
        this.$mdDialog=$mdDialog;
        this.UpdateService = UpdateService;
        this.TranslateService = TranslateService;
        this.$rootScope = $rootScope;
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

        this.books=this.UpdateService.getData(category)['data'];
        this.columns=this.UpdateService.getData(category)['columns'];
    }
    translate(word){
        return this.TranslateService.translate([word])[0]['value'];
    }

}
HomeController.$inject = ['UpdateService','$mdDialog','TranslateService','$rootScope'];

