/**
 * Created by jaran on 7/6/2016.
 */
import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';

import { Products } from './collection';

if (Meteor.isServer) {
    Meteor.publish('products', function(options, searchString) {
        const selector = {
            
        };

        if (typeof searchString === 'string' && searchString.length) {
            selector.name = {
                $regex: `.*${searchString}.*`,
                $options : 'i'
            };
        }

        Counts.publish(this, 'numberOfProducts', Products.find(selector), {
            noReady: true
        });

        return Products.find(selector, options);
    });
}