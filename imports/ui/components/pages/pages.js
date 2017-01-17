/**
 * Created by jaran on 7/6/2016.
 */
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';

import templateContact from './contact.html';
import templateServices from './services.html';
import template404 from './404.html';

class Pages {
    constructor($stateParams, $scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        console.log('ui.bootstrap');

        // uiTabs($scope);
    }

}

const name = 'pages';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    uiBootstrap
]).config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('contact', {
            url: '/contact',
            template: templateContact,
            controller: Pages
        })
        .state('services', {
            url: '/services',
            template: templateServices,
            controller: Pages
        })
        .state('404', {
            url: '/404',
            template: template404,
            controller: Pages
        });
}