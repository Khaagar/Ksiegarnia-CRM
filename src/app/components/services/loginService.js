export default class LoginService {

    constructor($mdToast, TranslateService, $state) {
        this.$mdToast = $mdToast;
        this.TranslateService = TranslateService;
        this.$state = $state;
        this.users = [
            {
                "id": 0,
                "username": "Admin",
                "password": "admin",
                "isLogged": false
            },
            {
                "id": 1,
                "username": "Kasia321",
                "password": "pusia123",
                "isLogged": false
            },
            {
                "id": 2,
                "username": "Hakjer",
                "password": "zaq1@WSX",
                "isLogged": false
            }
        ];
    }

    authorizeUser(login, password) {
        for (var i = 0; i < this.users.length; i++) {
            if (login === this.users[i]['username']) {
                if (password === this.users[i]['password']) {
                    localStorage.setItem("loggedUser", angular.toJson({ "username": login, "isLogged": true }))
                    return this.showLoginInfo(this.translate(['login-success']));
                } else return this.showLoginInfo(this.translate(['password-error']));
            }
        } return this.showLoginInfo(this.translate(['user-error']));
    }

    logout() {
        this.showLoginInfo(this.translate(['logout-success']));
        this.$state.go('home');
        localStorage.setItem("loggedUser", angular.toJson({ "username": "guest", "isLogged": false }))
    }

    checkLoggedUser() {
        return !(JSON.parse(localStorage.getItem("loggedUser"))['isLogged']);
    }

    getUser() {
        return JSON.parse(localStorage.getItem("loggedUser"))['username'];
    }

    showLoginInfo(message) {
        this.$mdToast.show(
            this.$mdToast.simple()
                .textContent(message)
                .position('top center')
                .hideDelay(3000)
        );
    }
    translate(word) {
        return this.TranslateService.translate([word])[0]['value'];
    }
}

LoginService.$inject = ['$mdToast', 'TranslateService', '$state'];