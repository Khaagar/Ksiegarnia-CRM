export default class HeaderController{
    constructor($animate){
        
        this.$animate=$animate;
        this.isOpen = false;
<<<<<<< HEAD
        console.log(this.isOpen);

=======
>>>>>>> commit 10.07
        this.$animate.enabled(true);
    }
}

HeaderController.$inject = ['$animate'];

