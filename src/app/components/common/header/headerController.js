export default class HeaderController{
    constructor($animate){
        
        this.$animate=$animate;
        this.isOpen = false;
        console.log(this.isOpen);

        this.$animate.enabled(true);
    }
    
}

HeaderController.$inject = ['$animate'];

