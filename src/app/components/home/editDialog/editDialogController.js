export default class EditDialogController{
    
    constructor($mdDialog, book){
        this.book = book;
        this.$mdDialog=$mdDialog;
        console.log(book);
    }
    cancel(){
        console.log("funkcja cancel");
        this.$mdDialog.cancel();
    }
    }


EditDialogController.$inject = ['$mdDialog','book'];

