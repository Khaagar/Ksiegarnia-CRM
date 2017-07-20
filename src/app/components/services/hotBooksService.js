export default class HotBooksService {

    constructor() {
        this.hotBooks = [];
    }

    setHotBooks() {
        localStorage.setItem("hotBooks", angular.toJson(this.hotBooks));
    }
}
