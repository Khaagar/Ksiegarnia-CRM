export default class TabsService {
    constructor() {
        this.tabs = [
            {
                "name": "authors"
            },
            {
                "name": "categories"
            },
            {
                "name": "countries"
            },
            {
                "name": "books"
            },
            {
                "name": "storages"
            },
            {
                "name": "covers"
            }
        ];
    }

    getTabs() {
        return this.tabs;
    }
}