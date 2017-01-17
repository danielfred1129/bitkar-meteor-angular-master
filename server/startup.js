/**
 * Created by jaran on 7/6/2016.
 */
import { Meteor } from 'meteor/meteor';
import { Products } from '../imports/api/products';

Meteor.startup(() => {
    if (Products.find().count() === 0) {
        const products = [
            { num: 1, code: '001s', category: 'speakers', name: 'Sound G.', src: "product/1.jpg", src_retro: "product/1r.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 200, discount: '20%', class: 'show-down' },
            { num: 2, code: '002s', category: 'watches', name: 'Rhon Doe', src: "product/2.jpg", src_retro: "product/2r.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 110, class: 'show-down' },
            { num: 3, code: '003s', category: 'speakers', name: 'Patrol SR', src: "product/3.jpg", src_retro: "product/3r.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 68, discount: '10%', class: 'show-up' },
            { num: 4, code: '004s', category: 'station', name: 'Redo Bag', src: "product/4.jpg", src_retro: "product/4r.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 134, class: 'show-down' },
            { num: 5, code: '005s', category: 'phone', name: 'Mikore', src: "product/5.jpg", src_retro: "product/5r.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 350, discount: '50%', class: 'show-up' },
            { num: 6, code: '006s', category: 'station', name: 'Big Hoddie', src: "product/6.jpg", src_retro: "product/6r.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 127, class: 'show-down' },
            { num: 7, code: '007s', category: 'watches', name: 'Roberto J.', src: "product/7.jpg", src_retro: "product/7r.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 500, discount: '30%', class: 'show-up' },
            { num: 8, code: '008s', category: 'phone', name: 'Rigo S.', src: "product/8.jpg", src_retro: "product/8r.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 346, class: 'show-down' },
            { num: 9, code: '009s', category: 'speakers', name: 'Eliteme', src: "product/9.jpg", src_retro: "product/9r.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 234, discount: '30%', class: 'show-down'}];

        const details = [
            { id: '001s', material: 'Pelt', power: '10-100W', size: '(LxAxP) 194x296x200 mm', weight: '5,5 kg' },
            { id: '002s', material: 'Wood', power: '30-140W', size: '(LxAxP) 194x296x200 mm', weight: '5,5 kg' },
            { id: '003s', material: 'Pelt', power: '10-150W', size: '(LxAxP) 194x296x200 mm', weight: '5,5 kg' },
            { id: '004s', material: 'Metal', power: '40-200W', size: '(LxAxP) 194x296x200 mm', weight: '5,5 kg' },
            { id: '005s', material: 'Wood', power: '10-100W', size: '(LxAxP) 194x296x200 mm', weight: '5,5 kg' },
            { id: '006s', material: 'Wood', power: '10-150W', size: '(LxAxP) 194x296x200 mm', weight: '5,5 kg' },
            { id: '007s', material: 'Metal', power: '10-180W', size: '(LxAxP) 194x296x200 mm', weight: '5,5 kg' },
            { id: '008s', material: 'Metal', power: '10-100W', size: '(LxAxP) 194x296x200 mm', weight: '5,5 kg' },
            { id: '009s', material: 'Pelt', power: '10-100W', size: '(LxAxP) 194x296x200 mm', weight: '5,5 kg'}];

        products.forEach((product) => {
            details.forEach((detail) => {
                if(detail.id == product.code) {
                    product.material = detail.material;
                    product.power = detail.power;
                    product.size = detail.size;
                    product.weight = detail.weight;
                }
            });
            Products.insert(product)
        });
    }
});