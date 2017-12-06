var express = require('express');
var router = express.Router();
var calssServer = require('../services/ClassServer');

router.get('/:id/:cid', function (req, res, next) {
    calssServer.GetChildByID(req.params.id, req.params.cid, function (err, data) {
        if (!err)
            res.json(data);
        else
            res.json();
    })
});
router.get('/:id', function (req, res, next) {
    calssServer.Single(req.params.id, function (err, data) {
        if (!err)
            res.json(data);
        else
            res.json();
    })
});
module.exports = router;