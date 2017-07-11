export default class HomeController{
    
    constructor(UpdateService,$mdDialog){
        this.$mdDialog=$mdDialog;
        this.books = JSON.parse(localStorage.getItem("books"));
    }
    showBook(ev, book){
        this.book=book;
<<<<<<< HEAD
        console.log(this.book);
=======
>>>>>>> commit 10.07
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
<<<<<<< HEAD
        console.log("funkcja cancel")
=======
>>>>>>> commit 10.07
        this.$mdDialog.cancel();
    }
    }


<<<<<<< HEAD
=======

>>>>>>> commit 10.07
HomeController.$inject = ['UpdateService','$mdDialog'];

