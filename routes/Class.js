var express = require('express');
var router = express.Router();
var db = require('../services/ClassServer');

router.get('/:id/:cid', function (req, res, next) {
    db.GetChildByID(req.params.id, req.params.cid, function (err, data) {
        if (!err)
            res.json(data);
        else
            res.json();
    })
});
router.get('/:id', function (req, res, next) {
    db.Single(req.params.id, function (err, data) {
        if (!err)
            res.json(data);
        else
            res.json();
    })
});
module.exports = router;