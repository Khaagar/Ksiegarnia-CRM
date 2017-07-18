export default class BooksService{
    
    constructor(){
        this.books = [
            {
                "id": 0,
                "title": "Harry Potter i komnata tajemnic bardzo długi tytuł",
                "author": "J. K. Rowling",
                "ISBN": "isbn1",
                "category": "fantasy",
                "storageType": "CD",
                "coverType": "typ",
                "price": 9.99,
                "cover": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSQf0yQYocQ7kFDZMqfmM3sNlnZRm-opVGBu9ISfCHciKBfp4ru2R9itQoH3os81ZiN8irbAf8&usqp=CAE"
            },
            {
                "id": 1,
                "title": "Harry Potter i więzień azkabanu",
                "author": "J. K. Rowling",
                "ISBN": "isbn2",
                "category": "fantasy",
                "storageType": "DVD",
                "coverType": "typ",
                "price": 99.99,
                "cover": "http://2.bp.blogspot.com/-0u9sIzhpqoA/VS_Kgo1bTPI/AAAAAAAAG14/rYJsm1kVRGk/s1600/396ff814-8791-451b-9214-6a9b86d54142-1360x2040.jpeg"
            },
            {
                "id": 2,
                "title": "Carrie",
                "author": "Stephen King",
                "ISBN": "isbn3",
                "category": "akcja",
                "storageType": "DVD",
                "coverType": "typ",
                "price": 99.99,
                "cover": "https://s-media-cache-ak0.pinimg.com/originals/3c/89/c2/3c89c2b8bf747ff1b862e67db1e47b14.jpg"
            },
            {
                "id": 3,
                "title": "Wielki Marsz",
                "author": "Stephen King",
                "ISBN": "isbn3",
                "category": "komedia",
                "storageType": "DVD",
                "coverType": "typ",
                "price": 99.99,
                "cover": "http://ecsmedia.pl/c/wielki-marsz-b-iext40495259.jpg"
            } ,
            {
                "id": 4,
                "title": "Pan Lodowego Ogrodu tom 1",
                "author": "Jarosław Grzędowicz",
                "ISBN": "isbn2",
                "category": "fantasy",
                "storageType": "DVD",
                "coverType": "typ",
                "price": 99.99,
                "cover": "http://fabrykaslow.com.pl/wp/wp-content/uploads/2016/03/pan-lodowego-ogrodu-tom-1-b-iext35241732.jpg"
            },
            {
                "id": 5,
                "title": "Pan Lodowego Ogrodu tom 2",
                "author": "Jarosław Grzędowicz",
                "ISBN": "isbn2",
                "category": "fantasy",
                "storageType": "DVD",
                "coverType": "typ",
                "price": 99.99,
                "cover": "http://ecsmedia.pl/c/pan-lodowego-ogrodu-tom-4-b-iext43252937.jpg"
            },
            {
                "id": 6,
                "title": "Pan Lodowego Ogrodu tom 3",
                "author": "Jarosław Grzędowicz",
                "ISBN": "isbn2",
                "category": "fantasy",
                "storageType": "DVD",
                "coverType": "typ",
                "price": 99.99,
                "cover": "http://images.gr-assets.com/books/1260393022l/7147249.jpg"
            },
            {
                "id": 7,
                "title": "Pan Lodowego Ogrodu tom 4",
                "author": "Jarosław Grzędowicz",
                "ISBN": "isbn2",
                "category": "fantasy",
                "storageType": "DVD",
                "coverType": "typ",
                "price": 99.99,
                "cover": "http://ecsmedia.pl/c/pan-lodowego-ogrodu-tom-4-b-iext43252937.jpg"
            },
            {
                "id": 8,
                "title": "Park Jurajski",
                "author": "Michel Crichton",
                "ISBN": "isbn2",
                "category": "thriller",
                "storageType": "DVD",
                "coverType": "typ",
                "price": 99.99,
                "cover": "https://s-media-cache-ak0.pinimg.com/originals/fd/38/0f/fd380f4a2fb3aa4a5c127eff564a6733.jpg"
            }
        ];
    }

    setBooks(){
            localStorage.setItem("books",angular.toJson(this.books));
    }        
}

