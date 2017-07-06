export default class HeaderController{
    constructor($rootScope, HeaderService){
        this.$rootScope=$rootScope;
        this.visible=true;
        this.headerService = HeaderService;
        $rootScope.$on('dataChanged', (event, newData) => {
            this.tekst = newData;
        });
    }
    
}

HeaderController.$inject = ['$rootScope','HeaderService'];

