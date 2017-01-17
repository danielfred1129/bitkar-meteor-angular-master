/**
 * Created by jaran on 7/6/2016.
 */
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './socially.html';
import { name as ProductsList } from '../productsList/productsList';
import { name as ProductDetails } from '../productDetails/productDetails';
import { name as Navigation } from '../navigation/navigation';
import { name as FooterNav } from '../footerNav/footerNav';
import { name as Pages } from '../pages/pages';

class Socially {}

const name = 'socially';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    ProductsList,
    ProductDetails,
    Pages,
    Navigation,
    FooterNav
]).component(name, {
    template,
    controllerAs: name,
    controller: Socially
}).config(config);

function config($locationProvider, $urlRouterProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    $urlRouterProvider
        // .when("/services", {templateUrl: "pages/services.html", controller: "PageCtrl"})
        // .when("/contact", {templateUrl: "pages/contact.html", controller: "PageCtrl"})
        .otherwise("/");
        // .otherwise("/404", {templateUrl: "pages/404.html", controller: "PageCtrl"});
};

