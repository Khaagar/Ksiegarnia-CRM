import angular from 'angular';
import ngMaterial from 'angular-material';
import LocalStorageModule from 'angular-local-storage';
import uirouter from '@uirouter/angularjs';
import angdragdrop from 'angular-native-dragdrop';
import dirPagination from 'angular-utils-pagination';

import '../../node_modules/angular-material/angular-material.css';
import './style.css';

//CONTROLLERS
import DetailsDialogController from './components/home/detailsDialog/detailsDialogController';
import EditDialogController from './components/manage/editDialog/editDialogController';


//COMPONENTS
import HeaderComponent from './components/common/header/headerComponent';
import HomeComponent from './components/home/homeComponent';
import ManageComponent from './components/manage/manageComponent';


//SERVICES
import UpdateService from './components/services/updateService';
    import BooksService from './components/services/booksService';
    import AuthorsService from './components/services/authorsService'
    import CategoriesService from './components/services/categoriesService';
    import CountriesService from './components/services/countriesService';
    import StoragesService from './components/services/storagesService';
    import CoversService from './components/services/coversService';
import TranslateService from './components/services/translateService';
import LoginService from './components/services/loginService';
import TabsService from './components/services/tabsService'
import HotBooksService from './components/services/hotBooksService';


export default angular.module('app', [ngMaterial, LocalStorageModule, uirouter, angdragdrop, dirPagination])

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
}).config(function(paginationTemplateProvider) {

    paginationTemplateProvider.setString(require('./components/pagination/paginationButtons.html'));
})
                    .controller('detailsDialogController', DetailsDialogController)
                    .controller('editDialogController',EditDialogController)
                    
                    .component('myHeader', HeaderComponent)
                    .component('myHome', HomeComponent)
                    .component('myManage',ManageComponent)


                    .service('TabsService',TabsService)
                    .service('UpdateService',UpdateService)
                        .service('BooksService',BooksService)
                        .service('AuthorsService',AuthorsService)
                        .service('CategoriesService',CategoriesService)
                        .service('CountriesService',CountriesService)
                        .service('StoragesService',StoragesService)
                        .service('CoversService',CoversService)
                    .service('TranslateService',TranslateService)
                    .service('LoginService',LoginService)
                    .service('HotBooksService',HotBooksService)
                    .run(function(UpdateService,$rootScope,$transitions){
                        
                        $transitions.onStart( { to: 'manage' }, function(trans) {
                            var myAuthService = trans.injector().get('LoginService');
                            return !myAuthService.checkLoggedUser();
                        });

                        $rootScope.loading = false;

                        if ($rootScope.language==undefined){
                            $rootScope.language="PL";
                        }
                        
                        if (localStorage.length==0){
                            UpdateService.setData();
                            localStorage.setItem("loggedUser",angular.toJson({
                                "username":"guest",
                                "isLogged":false
                            }))
                        }
                    });



