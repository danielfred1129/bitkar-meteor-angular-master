/**
 * Created by jaran on 7/6/2016.
 */
Meteor.startup(function () {
    process.env.MAIL_URL="smtp://jaros.anger@gmail.com:[MY_PASSWORD]@smtp.gmail.com:465/";
})