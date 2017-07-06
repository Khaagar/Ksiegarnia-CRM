import angular from 'angular';
import ngMaterial from 'angular-material';
import LocalStorageModule from 'angular-local-storage';
import uirouter from 'angular-ui-router';

import '../../node_modules/angular-material/angular-material.css';
import './style.css';

import CommonModule from './components/commonModule';


export default angular.module('AppModule', [ngMaterial, CommonModule.name, LocalStorageModule, uirouter])
.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('manage',{
        url: '/manage',
        component: 'myManage'
    })
    .state('home', {
        url: '/home',
        component: 'myHome'
    });




});




