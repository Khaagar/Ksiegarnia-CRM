import angular from 'angular';
import ngMaterial from 'angular-material';
import LocalStorageModule from 'angular-local-storage';
import uirouter from 'angular-ui-router';


import '../../node_modules/angular-material/angular-material.css';
import './style.css';

//CONTROLLERS
import DetailsDialogController from './components/home/detailsDialog/detailsDialogController';
import EditDialogController from './components/manage/editDialog/editDialogController';


//COMPONENTS
import HeaderComponent from './components/common/header/headerComponent';
import FooterComponent from './components/common/footer/footerComponent';
import HomeComponent from './components/home/homeComponent';
import TableComponent from './components/table/tableComponent';
import ManageComponent from './components/manage/manageComponent';


//SERVICES
import HomeService from './components/home/homeService';
import HeaderService from './components/common/header/headerService';
import TableService from './components/table/tableService';
import ManageService from './components/manage/manageService';
import UpdateService from './components/services/updateService';
    import BooksService from './components/services/booksService';
    import AuthorsService from './components/services/authorsService'
    import CategoriesService from './components/services/categoriesService';
    import CountriesService from './components/services/countriesService';
    import StoragesService from './components/services/storagesService';
    import CoversService from './components/services/coversService';
import TranslateService from './components/services/translateService';
import LoginService from './components/services/loginService';


export default angular.module('app', [ngMaterial, LocalStorageModule, uirouter])

.config(function($stateProvider, $urlRouterProvider) {
     
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
    .state('home', {
        url: '/home',
        component: 'myHome'
    })
    .state('manage',{
        url: '/manage',
        component: 'myManage'
    });
}).config(function($mdIconProvider) {
  $mdIconProvider
    .defaultIconSet('./icons/mdi.svg');
})
                    .controller('detailsDialogController', DetailsDialogController)
                    .controller('editDialogController',EditDialogController)
                    
                    .component('myHeader', HeaderComponent)
                    .component('myHome', HomeComponent)
                    .component('myFooter', FooterComponent)
                    .component('myTable', TableComponent)
                    .component('myManage',ManageComponent)

                    .service('HomeService',HomeService)
                    .service('HeaderService',HeaderService)
                    .service('TableService',TableService)
                    .service('ManageService',ManageService)
                    .service('UpdateService',UpdateService)
                        .service('BooksService',BooksService)
                        .service('AuthorsService',AuthorsService)
                        .service('CategoriesService',CategoriesService)
                        .service('CountriesService',CountriesService)
                        .service('StoragesService',StoragesService)
                        .service('CoversService',CoversService)
                    .service('TranslateService',TranslateService)
                    .service('LoginService',LoginService)
                    .run(function(UpdateService,$rootScope){

                        if ($rootScope.language==undefined){
                            $rootScope.language="PL";
                            $rootScope.currentUser={
                                "username":"Guest",
                                "isLogged":false
                            }
                        }
                        
                        if (localStorage.length==0){
                            UpdateService.setData();
                            localStorage.setItem("loggedUser",angular.toJson({
                                "username":"Guest",
                                "isLogged":false
                            }))
                        }
                    });




