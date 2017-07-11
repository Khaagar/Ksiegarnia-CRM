export default class BooksService{
    
    constructor(){
        this.authors = [
            {
                "id": "0", 
                "name": "J. K. Rowling",
                "country": "UK",
            },
            {
                "id": "1", 
                "name": "Stephen King",
                "country": "USA",
            },
            {
                "id": "2", 
                "name": "Andrzej Sapkowski",
                "country": "Poland",
            }
        ];
    }

    setAuthors(){
            localStorage.setItem("authors",JSON.stringify(this.authors));
            localStorage.setItem("authors",angular.toJson(this.authors));
        

    }        

    }
