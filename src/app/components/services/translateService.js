export default class TranslateService {

    constructor($rootScope) {
        this.$rootScope = $rootScope;
        this.translatedWords = [];
        this.vocabulary = [
        
        //MANAGE CATEGORIES
            {
                "name": "id",
                "PL": "ID",
                "EN": "ID"
            },
            {
                "name": "name",
                "PL": "Nazwa",
                "EN": "Name"
            },
            {
                "name": "title",
                "PL": "Tytuł",
                "EN": "Title"
            },
            {
                "name": "author",
                "PL": "Autor",
                "EN": "Author"
            },
            {
                "name": "price",
                "PL": "Cena",
                "EN": "Price"
            },
            {
                "name": "storageType",
                "PL": "Nośnik",
                "EN": "Storage"
            },
            {
                "name": "coverType",
                "PL": "Typ okładki",
                "EN": "Cover type"
            },
            {
                "name": "cover",
                "PL": "Okładka",
                "EN": "Cover"
            },
            {
                "name":"country",
                "PL":"Kraj",
                "EN":"Country"
            },
            {
                "name":"code",
                "PL":"Kod",
                "EN":"Code"
            },
            {
                "name":"ISBN",
                "PL":"ISBN",
                "EN":"ISBN"
            },
            {
                "name":"category",
                "PL":"Kategoria",
                "EN":"Category"
            },
            {
                "name":"close",
                "PL":"Zamknij",
                "EN":"Close"
            },
            
            //MENU

        {
            "name": "home",
            "PL":"Strona główna",
            "EN":"Main page"
        },
        {
            "name":"manage",
            "PL":"Zarządzanie elementami",
            "EN":"Manage items"
        },
        {
            "name":"#",
            "PL":"Konfiguracja systemu",
            "EN":"System configuration"
        },
        {
            "name":"bookstore",
            "PL": "KSIĘGARNIA",
            "EN": "BOOKSTORE"
        },
        {
            "name":"details",
            "PL":"Szczegóły",
            "EN":"Details"
        },
        {
            "name":"edit",
            "PL":"Edytuj",
            "EN":"Edit"
        },
        {
            "name":"delete",
            "PL":"Usuń",
            "EN":"Delete"
        },
        {
                "name": "authors",
                "PL": "Autorzy",
                "EN": "Authors"
            },
            {
                "name": "categories",
                "PL": "Kategorie",
                "EN": "Categories"
            },
            {
                "name": "countries",
                "PL": "Kraje",
                "EN": "Countries"
            },
            {
                "name": "books",
                "PL": "Książki",
                "EN": "Books"
            },
            {
                "name": "storages",
                "PL": "Nośniki",
                "EN":"Storages"
            },
            {
                "name": "covers",
                "PL": "Okładki",
                "EN": "Covers"
            },
            {
                "name":"cancel",
                "PL": "Anuluj",
                "EN":"Cancel"
            },
            {
                "name":"ok",
                "PL":"OK",
                "EN":"OK"
            },
            {
                "name":"add",
                "PL":"Dodaj",
                "EN":"Add"
            },
            {
                "name":"onlineBookstore",
                "PL":"Księgarnia internetowa",
                "EN":"Online Bookstore"
            },
            {
                "name":"login",
                "PL":"Zaloguj",
                "EN":"Login"
            },
            {
                "name":"logout",
                "PL":"Wyloguj",
                "EN":"Logout"
            }
        ];
    }

    translate(words) {
        this.translatedWords=[];
        for (var i=0; i<words.length;i++) {
            this.translatedWords.push(this.iterateVocabulary(words[i]));
        }
        return this.translatedWords;
    }


    iterateVocabulary(word){
        this.tempTranslate = [];
        for (var j=0; j<this.vocabulary.length;j++) {
                if (word == this.vocabulary[j]['name']) {
                   this.tempTranslate.push({
                       "name": this.vocabulary[j]['name'],
                       "value": this.vocabulary[j][this.$rootScope.language]
                });
                }
            }
            return this.tempTranslate[0];
            
    }
}

TranslateService.$inject = ['$rootScope'];

