import angular from 'angular';
import ngMaterial from 'angular-material';

//COMPONENTS
import HeaderComponent from './common/header/headerComponent';
import FooterComponent from './common/footer/footerComponent';
import HomeComponent from './home/homeComponent';
import TableComponent from './table/tableComponent';
import ManageComponent from './manage/manageComponent';

//SERVICES
import HomeService from './home/homeService';
import HeaderService from './common/header/headerService';
import TableService from './table/tableService';
import ManageService from './manage/manageService';


export default angular.module('CommonModule', [ngMaterial])
                    .component('myHeader', HeaderComponent)
                    .component('myHome', HomeComponent)
                    .component('myFooter', FooterComponent)
                    .component('myTable', TableComponent)
                    .component('myManage',ManageComponent)
                    .service('HomeService',HomeService)
                    .service('HeaderService',HeaderService)
                    .service('TableService',TableService)
                    .service('ManageService',ManageService);

