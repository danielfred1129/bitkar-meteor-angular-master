/**
 * Created by jaran on 7/6/2016.
 */
import angular from 'angular';
import ngAnimate from 'angular-animate';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';

import template from './productsList.html';
import { Products } from '../../../api/products';

class ProductsList {
    constructor($scope, $reactive, $filter) {
        'ngInject';

        $reactive(this).attach($scope);

        this.perPage = 9;
        this.page = 1;
        this.searchText = '';
        this.category = '';

        this.subscribe('products', () => [{
                limit: parseInt(this.perPage),
                skip: parseInt((this.getReactively('page') - 1) * this.perPage)
            },
            this.getReactively('searchText')
        ]);

        this.helpers({
            products() {
                const options = {};

                if(this.getReactively('category') != '') {
                    options['category'] = this.getReactively('category').toLowerCase();
                }

                if(this.getReactively('searchText') != '') {
                    options['name'] = {
                        $regex: `.*${this.getReactively('searchText')}.*`,
                        $options : 'i'
                    };
                }

                return Products.find(options);
            },
            productsCount() {
                return Counts.get('numberOfProducts');
            },
            numberOfPages() {
                return Math.ceil(Counts.get('numberOfProducts') / this.perPage);
            },
            encodedUrl(name) {
                return window.encodeURI(name);
            }
        });
    }

    pageChanged(newPage) {
        this.page = newPage;
    }

    filterCategory(category) {
        this.category = category;
    }
}

const name = 'productsList';

// create a module
export default angular.module(name, [
    ngAnimate,
    angularMeteor,
    uiRouter,
    utilsPagination
]).component(name, {
    template,
    controllerAs: name,
    controller: ProductsList
}).config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('products', {
            url: '/',
            template: '<products-list></products-list>'
        });
}