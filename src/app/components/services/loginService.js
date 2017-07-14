export default class LoginService{
    
    constructor($rootScope){
        this.$rootScope = $rootScope;
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

    authorizeUser(login,password){
        for(var i=0; i<this.users.length; i++){
            if (login===this.users[i]['username']){
                if (password===this.users[i]['password']){
                    localStorage.setItem("loggedUser",angular.toJson({"username":login,"isLogged":true}))
                    return 'zalogowano pomyślnie';
                } else return 'błędne hasło';
            }
        } return 'nie znaleziono użytkownika';
    }       

    logout(){
        localStorage.setItem("loggedUser",angular.toJson({"username":"Guest","isLogged":false}))
    } 

    checkLoggedUser(){
        return !(JSON.parse(localStorage.getItem("loggedUser"))['isLogged']);
    }

    getUser(){
       
        return JSON.parse(localStorage.getItem("loggedUser"))['username'];
    }

    }
LoginService.$inject = ['$rootScope'];