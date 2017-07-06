export default class TableService{
    constructor(){
    this.books =[];
        this.books.push({
            title: "Tytuł 1",
            author: "Autor 1",
            price: "10",
            publisher: "sowa"
        });

        this.books.push({
            title: "Tytuł 2",
            author: "Autor 3",
            price: "20",
            publisher: "krowa"
        });

    }

    getBooks(){
        return this.books;
    }
    
}

