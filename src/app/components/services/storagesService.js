export default class StoragesService{
    
    constructor(){
        this.storages = [
            {
                "id": "0",
                "name": "CD"
            },
            {
                "id": "1",
                "name": "DVD"
            },
            {
                "id": "2",
                "name": "Blu-Ray"
            },
            {
                "id": "3",
                "name": "Pendrive"
            },
            {
                "id": "4",
                "name": "mp3"
            }
        ];
    }

    setStorages(){
            localStorage.setItem("storages",angular.toJson(this.storages));
    
    }        

    }

