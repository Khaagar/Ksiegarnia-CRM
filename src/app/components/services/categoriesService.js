export default class CategoriessService{
    
    constructor(){
        this.categories = [
            {
                "id": 0,
                "name": "dramat"    
            },
            {
                "id": 1,
                "name": "komedia"    
            },

            {
                "id": 2,
                "name": "akcja"    
            },
            {
                "id": 3,
                "name": "fantasy"    
            },
            {
                "id": 4,
                "name": "sci-fi"    
            },
            {
                "id": 5,
                "name": "poradnik"    
            }
        ];
    }

    setCategories(){
            localStorage.setItem("categories",angular.toJson(this.categories));
    }        
}

