'use strict';
var config = require('../config');
module.exports = {
    //判断是否有权限
    isAuthenticated: function (req, res, next) {
        // console.log(req.signedCookies.name);
        next();
        // if (req.isAuthenticated()) {
        //     next();
        // } else {
        //     res.redirect('/login');
        // }
    }
}