var express = require('express');
var router = express.Router();
var db = require('../services/NewsServer');

router.get('/:id', function (req, res, next) {
    db.Single(req.params.id, function (err, data) {
        if (!err)
            res.json(data);
        else
            res.json();
    })
});
router.get('/:cid/:attr/:count', function (req, res, next) {
    var par = req.params;
    db.GetEnumByType(par.cid, par.attr, par.count, function (err, data) {
        if (!err)
            res.json(data);
        else
            res.json();
    })
});
router.post('page/:pageInfo/:conditions/:options', function (req, res, next) {
    var par = req.params;
    db.GetPage(par.pageInfo, par.conditions, par.options, function (err, data) {
        if (!err)
            res.json(data);
        else
            res.json();
    })
})
module.exports = router;