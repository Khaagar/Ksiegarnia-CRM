export default class EditDialogController {

    constructor($mdDialog, id, columnHeaders, tabName, UpdateService, TranslateService) {
        this.columnHeaders = columnHeaders;
        this.$mdDialog = $mdDialog;
        this.tabName = tabName;
        this.UpdateService = UpdateService;
        this.TranslateService = TranslateService;
        this.id = id;
        this.data = [];
        this.tempItem = UpdateService.getData(tabName)['data'][this.id];
    }
    cancel() {
        this.$mdDialog.cancel();
    }

    submit(item) {
        if (this.id === -1){
            this.data = JSON.parse(localStorage.getItem(this.tabName));
            this.data.push(item);
            this.data[this.data.length - 1]['id'] = this.data[this.data.length - 2]['id'] + 1;
        }else{
            this.data = JSON.parse(localStorage.getItem(this.tabName));
            this.data[this.id] = item;
        }

        localStorage.setItem(this.tabName, angular.toJson(this.data));
        this.$mdDialog.hide();
    }

    translate(word){
        return this.TranslateService.translate([word])[0]['value'];
    }

}

EditDialogController.$inject = ['$mdDialog', 'id', 'columnHeaders', 'tabName', 'UpdateService', 'TranslateService'];

