
export default class HomeController{
    
    constructor($rootScope, HomeService){
        console.log('jestem 1');
        this.$rootScope = $rootScope;
        this.HomeService = HomeService;
        this.tekst = "";
        this.dupsy = [];
        this.quantity = 0;
    }
}

HomeController.$inject = ['$rootScope', 'HomeService'];

