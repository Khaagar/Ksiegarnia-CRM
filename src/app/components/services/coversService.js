export default class CoversService{
    
    constructor(){
        this.covers = [{
            "id":0,
            "name":"typ0"
        },
        {
            "id":1,
            "name":"typ1"
        },
        {
            "id":2,
            "name":"typ2"
        },
        {
            "id":3,
            "name":"typ3"
        },
        {
            "id":4,
            "name":"typ4"
        }];
    }

    setCovers(){
            localStorage.setItem("covers",angular.toJson(this.covers));
    }        

    }
