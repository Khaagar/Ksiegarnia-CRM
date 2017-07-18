export default class CountriesService {

    constructor() {
        this.countries = [
            {
                "id": 0,
                "name": "Poland",
                "code": "PL"
            },
            {
                "id": 1,
                "name": "France",
                "code": "FR"
            },
            {
                "id": 2,
                "name": "United Kingdoms",
                "code": "UK"
            },
            {
                "id": 3,
                "name": "United Stated",
                "code": "US"
            },
            {
                "id": 4,
                "name": "Russia",
                "code": "RU"
            }
        ];
    }

    setCountries() {
        localStorage.setItem("countries", angular.toJson(this.countries));
    }
}

