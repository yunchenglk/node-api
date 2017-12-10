var express = require('express');
var router = express.Router();
var db = require('../services/ClassServer');

router.get('/:id', function (req, res, next) {
    db.Single(req.params.id, function (err, data) {
        if (!err)
            res.json(data);
        else
            res.json();
    })
});
module.exports = router;