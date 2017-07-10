export default class BooksService{
    
    constructor(){
        this.books = [
            {
                "id": "0",
                "title": "Harry Potter i komnata tajemnic bardzo długi tytuł",
                "author": "J. K. Rowling",
                "ISBN": "isbn1",
                "category": "dramat",
                "storageType": "CD",
                "coverType": "typ",
                "price": "9,99",
                "cover": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSQf0yQYocQ7kFDZMqfmM3sNlnZRm-opVGBu9ISfCHciKBfp4ru2R9itQoH3os81ZiN8irbAf8&usqp=CAE"
            },
            {
                "id": "1",
                "title": "Harry Potter i więzień azkabanu",
                "author": "J. K. Rowling",
                "ISBN": "isbn2",
                "category": "komedia",
                "storageType": "DVD",
                "coverType": "typ",
                "price": "99,99",
                "cover": "http://2.bp.blogspot.com/-0u9sIzhpqoA/VS_Kgo1bTPI/AAAAAAAAG14/rYJsm1kVRGk/s1600/396ff814-8791-451b-9214-6a9b86d54142-1360x2040.jpeg"
            },
            {
                "id": "2",
                "title": "Carrie",
                "author": "Stephen King",
                "ISBN": "isbn3",
                "category": "akcja",
                "storageType": "DVD",
                "coverType": "typ",
                "price": "99,99",
                "cover": "https://s-media-cache-ak0.pinimg.com/originals/3c/89/c2/3c89c2b8bf747ff1b862e67db1e47b14.jpg"
            },
            {
                "id": "3",
                "title": "Wielki Marsz",
                "author": "Stephen King",
                "ISBN": "isbn3",
                "category": "komedia",
                "storageType": "DVD",
                "coverType": "typ",
                "price": "99,99",
                "cover": "http://stephenking.pl/wp-content/uploads/2015/07/Wielki-marsz-pl.jpg"
            } ,
            {
                "id": "4",
                "title": "Harry Potter i więzień azkabanu",
                "author": "J. K. Rowling",
                "ISBN": "isbn2",
                "category": "komedia",
                "storageType": "DVD",
                "coverType": "typ",
                "price": "99,99",
                "cover": "http://2.bp.blogspot.com/-0u9sIzhpqoA/VS_Kgo1bTPI/AAAAAAAAG14/rYJsm1kVRGk/s1600/396ff814-8791-451b-9214-6a9b86d54142-1360x2040.jpeg"
            },
            {
                "id": "5",
                "title": "Harry Potter i więzień azkabanu",
                "author": "J. K. Rowling",
                "ISBN": "isbn2",
                "category": "komedia",
                "storageType": "DVD",
                "coverType": "typ",
                "price": "99,99",
                "cover": "http://2.bp.blogspot.com/-0u9sIzhpqoA/VS_Kgo1bTPI/AAAAAAAAG14/rYJsm1kVRGk/s1600/396ff814-8791-451b-9214-6a9b86d54142-1360x2040.jpeg"
            },
            {
                "id": "6",
                "title": "Harry Potter i więzień azkabanu",
                "author": "J. K. Rowling",
                "ISBN": "isbn2",
                "category": "komedia",
                "storageType": "DVD",
                "coverType": "typ",
                "price": "99,99",
                "cover": "http://2.bp.blogspot.com/-0u9sIzhpqoA/VS_Kgo1bTPI/AAAAAAAAG14/rYJsm1kVRGk/s1600/396ff814-8791-451b-9214-6a9b86d54142-1360x2040.jpeg"
            },
            {
                "id": "7",
                "title": "Harry Potter i więzień azkabanu",
                "author": "J. K. Rowling",
                "ISBN": "isbn2",
                "category": "komedia",
                "storageType": "DVD",
                "coverType": "typ",
                "price": "99,99",
                "cover": "http://2.bp.blogspot.com/-0u9sIzhpqoA/VS_Kgo1bTPI/AAAAAAAAG14/rYJsm1kVRGk/s1600/396ff814-8791-451b-9214-6a9b86d54142-1360x2040.jpeg"
            },
            {
                "id": "8",
                "title": "Harry Potter i więzień azkabanu",
                "author": "J. K. Rowling",
                "ISBN": "isbn2",
                "category": "komedia",
                "storageType": "DVD",
                "coverType": "typ",
                "price": "99,99",
                "cover": "http://2.bp.blogspot.com/-0u9sIzhpqoA/VS_Kgo1bTPI/AAAAAAAAG14/rYJsm1kVRGk/s1600/396ff814-8791-451b-9214-6a9b86d54142-1360x2040.jpeg"
            }
        ];
    }

    setBooks(){
            localStorage.setItem("books",JSON.stringify(this.books));
    
    }        

    }

