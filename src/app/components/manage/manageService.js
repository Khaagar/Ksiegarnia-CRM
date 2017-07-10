export default class ManageService{
    constructor(){
        this.tabs = [
            {
                "category": "authors",
                "name": "Autorzy"
            },
            {
                "category": "categories",
                "name": "Kategorie"
            },
            {
                "category": "countries",
                "name": "Kraje"
            },
            {
                "category": "books",
                "name": "Książki"
            },
            {
                "category": "storages",
                "name": "Nośniki"
            },
            {
                "category": "covers",
                "name": "Okładki"
            }
        ];
    }
    getTabs(){
        return this.tabs;
    }

    }