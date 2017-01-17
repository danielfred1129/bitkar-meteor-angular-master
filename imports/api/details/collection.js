/**
 * Created by jaran on 7/6/2016.
 */
import { Mongo } from 'meteor/mongo';

export const Details = new Mongo.Collection('details');

Details.allow({
    insert(userId, detail) {
        return true;
    },
    update(userId, detail, fields, modifier) {
        return true;
    },
    remove(userId, detail) {
        return true;
    }
});