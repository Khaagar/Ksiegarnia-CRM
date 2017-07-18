export default class HeaderController{
    constructor($rootScope,TranslateService,LoginService,$interval){
        let vm=this;
        this.$rootScope=$rootScope;
        this.TranslateService = TranslateService;
        this.LoginService = LoginService;

        this.username;
        this.password;
        this.login = {
            isOpen: false,
            user: "Guest"
        };
        this.menu = {
            isOpen: false
        };

        this.tick();
        $interval(function(){vm.tick();},1000);

    }

    tick(){
            this.clock=new Date();
    }

    changeLanguage(language){
        this.$rootScope.language=language;
    }

    translate(word){
        return this.TranslateService.translate([word])[0]['value'];
    }
    
    showMenuPanel(){
        Object.defineProperty(this.menu,'isOpen',{
            get: function(){
                return true;
            },
            set: function(){
            }
        });
    }

    hideMenuPanel(){
        Object.defineProperty(this.menu, 'isOpen',{
            get: function(){
                return false;
            },
            set: function(){
            }
        });
    }

    showLoginPanel(){
        Object.defineProperty(this.login,'isOpen',{
            get: function(){
                return true;
            },
            set: function(){
            }
        });
    }

    hideLoginPanel(){
        Object.defineProperty(this.login, 'isOpen',{
            get: function(){
                return false;
            },
            set: function(){
            }
        });
    }

    authorizeUser(){
        this.LoginService.authorizeUser(this.username,this.password);
        this.hideLoginPanel();
        this.username='';
        this.password='';
    }

    logout(){
        this.LoginService.logout();
        this.hideLoginPanel();
    }

    getUser(){
        return this.LoginService.getUser();
    }
    
}

HeaderController.$inject = ['$rootScope','TranslateService','LoginService','$interval'];

