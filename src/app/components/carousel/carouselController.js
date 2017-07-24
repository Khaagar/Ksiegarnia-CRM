export default class CarouselController{
    
    constructor(UpdateService,$mdDialog,TranslateService,$rootScope,$timeout){

        this.frontItem = {
            "width":275,
            "height":330
        }
        this.layers=0;
        this.scale=0.15;

        this.UpdateService = UpdateService;
        this.$mdDialog = $mdDialog;
        this.data = this.UpdateService.getData("hotBooks")['data'];
        this.columns = this.UpdateService.getData("hotBooks")['columns'];
        if (this.data.length<1){
            this.layers=0;
        } else if(this.data.length<2){
            this.layers=1;
        } else if(this.data.length<6){
            this.layers=2;
        } else this.layers=3;

        this.carouselVisible = false;
        this.hotBooks = [];
        // this.layers = [{
        //     "layer":0,
        //     "width": this.frontItem.width*1,
        //     "height": this.frontItem.height*1
        // },
        // {
        //     "layer":1,
        //     "width": this.frontItem.width*0.8,
        //     "height": this.frontItem.height*0.8
        // },
        // {
        //     "layer":2,
        //     "width": this.frontItem.width*0.6,
        //     "height": this.frontItem.height*0.6
        // },
        //         {
        //     "layer":3,
        //     "width": this.frontItem.width*0.4,
        //     "height": this.frontItem.height*0.4
        // }
        // ];
        this.bookIterator=0;
        this.visibleItems = [];
        this.setButtons();
            

        
    }

    bookDetails(ev, book){
            this.$mdDialog.show({
                template: require('../detailsDialog/detailsDialog.html'),
                controller: 'detailsDialogController',
                controllerAs: 'details',
                parent: angular.element(document.body),
                targetEvent: ev,
                locals: {book: book, columns: this.columns},
                clickOutsideToClose:true,
            })
        }


    showCarousel(){ 
        if (this.carouselVisible){
            this.carouselVisible = false;
        } else this.carouselVisible = true;
    }

    setButtons(){
        for(var i=1;i<=this.layers;i++){
            if(i==1){
                this.visibleItems.push({
                    "book":[],
                    "name":"center",
                    "layer":i,
                    "width":this.frontItem.width*(1-i*this.scale),
                    "height":this.frontItem.height*(1-i*this.scale)
                });
            } else if(i==this.layers){
                    this.visibleItems.push({
                    "book":[],
                    "name":"right",
                    "layer":i,
                    "width":this.frontItem.width*(1-i*this.scale),
                    "height":this.frontItem.height*(1-i*this.scale)
                });
                this.visibleItems.splice(0,0,{
                    "book":[],
                    "name":"left",
                    "layer":i,
                    "width":this.frontItem.width*(1-i*this.scale),
                    "height":this.frontItem.height*(1-i*this.scale)
                });
            } else{
                this.visibleItems.push({
                    "book":[],
                    "name":"right",
                    "layer":i,
                    "width":this.frontItem.width*(1-i*this.scale),
                    "height":this.frontItem.height*(1-i*this.scale)
                });
                this.visibleItems.splice(0,0,{
                    "book":[],
                    "name":"left",
                    "layer":i,
                    "width":this.frontItem.width*(1-i*this.scale),
                    "height":this.frontItem.height*(1-i*this.scale)
                });
            }
            
        }
        this.fillButtonsWithBooks('start');

    }

    fillButtonsWithBooks(direction,jump){
        var j=0;
        if (direction==='right'){
            this.bookIterator+=jump;
        } else if(direction==='left'){
            this.bookIterator-=jump;
        }
        if (this.bookIterator>this.data.length){
            this.bookIterator=1;
        }
        if (this.bookIterator<0-this.data.length){
            this.bookIterator=this.data.length-1;
        }

        for(var i=this.bookIterator;i<this.bookIterator+this.visibleItems.length;i++){
            if (i>=0 && i<this.data.length){
                this.visibleItems[j].book = this.data[i];
            }
            if (i>=this.data.length){
                this.visibleItems[j].book = this.data[i-this.data.length];
            }
            if (i<0){
                this.visibleItems[j].book = this.data[this.data.length+i];
            }
            j++;
        }
    }

    slide(direction,jump){
        this.fillButtonsWithBooks(direction,jump);
    }

    keyPress(event){
    //right
        if (event.which == 39){
            this.slide('right',1);
        }
    //left
        else if(event.which == 37){
            this.slide('left',1);
        }
    }

    imageClick(ev,book,name,jump){
        if (name=='center'){
            this.bookDetails(ev,book);
        } else this.slide(name,jump);

    }

}
CarouselController.$inject = ['UpdateService','$mdDialog','TranslateService','$rootScope','$timeout'];

