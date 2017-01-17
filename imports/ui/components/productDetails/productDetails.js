/**
 * Created by jaran on 7/6/2016.
 */
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './productDetails.html';
import { Products } from '../../../api/products';

class ProductDetails {
    constructor($stateParams, $scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.productCode = $stateParams.productCode;

        this.subscribe('products');

        this.helpers({
            product() {
                return Products.findOne({
                    code: $stateParams.productCode
                });
            }
        });
    }
}

const name = 'productDetails';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter
]).component(name, {
    template,
    controllerAs: name,
    controller: ProductDetails
}).config(config);

function config($stateProvider) {
    'ngInject';

    $stateProvider.state('productDetails', {
        url: '/products/:productCode/:productName',
        template: '<product-details></product-details>'
    });
}