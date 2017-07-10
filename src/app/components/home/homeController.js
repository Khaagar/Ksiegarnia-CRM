export default class HomeController{
    
    constructor(UpdateService,$mdDialog){
        this.$mdDialog=$mdDialog;
        this.books = JSON.parse(localStorage.getItem("books"));
    }
    showBook(ev, book){
        this.book=book;
        console.log(this.book);
            this.$mdDialog.show({
                template: require('./editDialog/editDialog.html'),
                controller: 'editDialogController',
                controllerAs: 'edit',
                parent: angular.element(document.body),
                targetEvent: ev,
                locals: {book: this.book},
                clickOutsideToClose:true,
                
            })
        }
    cancel(){
        console.log("funkcja cancel")
        this.$mdDialog.cancel();
    }
    }


HomeController.$inject = ['UpdateService','$mdDialog'];

