export default class DetailsDialogController{
    
    constructor($mdDialog, book, columns, TranslateService){
        this.book = book;
        this.$mdDialog=$mdDialog;
        this.TranslateService = TranslateService;
        this.columns=columns;
    }
    
    cancel(){
        this.$mdDialog.cancel();
    }

    translate(word){
        return this.TranslateService.translate([word])[0]['value'];
    }

}


DetailsDialogController.$inject = ['$mdDialog','book','columns','TranslateService'];

