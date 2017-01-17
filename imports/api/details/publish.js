/**
 * Created by jaran on 7/6/2016.
 */
import { Meteor } from 'meteor/meteor';

import { Details } from './collection';

if (Meteor.isServer) {
    Meteor.publish('details', function(options) {
        const selector = {

        };

        return Details.find(selector, options);
    });
}