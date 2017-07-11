export default class CoversService{
    
    constructor(){
        this.covers = [
            {
                "id": "0",
                "name":"cover 0"
            },
            {
                "id": "1",
                "name":"cover 1"
            },
            {
                "id": "2",
                "name":"cover 2"
            },
            {
                "id": "3",
                "name":"cover 3"
            },
            {
                "id": "4",
                "name":"cover 4"
            },
            {
                "id": "5",
                "name":"cover 5"
            },
            {
                "id": "6",
                "name":"cover 6"
            }
        ];
    }

    setCovers(){
            localStorage.setItem("covers",angular.toJson(this.covers));
    
    }        

    }

