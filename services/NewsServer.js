var _db = require('../lib/_db');
var logger = require('pomelo-logger').getLogger('mongodb-log');
module.exports = {
    /**
     * 根据ID
     * @param id ID
     */
    Single: function (id, callback) {
        _db.findOne("News", { ID: id.toLowerCase() }, function (err, data) {
            if (err) {
                logger.error('根据ID信息失败');
                callback(err, null);
            } else {
                callback(err, data);
            }
        })
    },
    /**
     * 根据栏目获取新闻
     * @param cid 栏目ID
     */
    GetEnumChild: function (cid, callback) {
        _db.find("News", { ClassID: cid.toLowerCase() }, function (err, data) {
            if (err) {
                logger.error('根据栏目获取新闻失败');
                callback(err, null);
            } else {
                callback(err, data);
            }
        })
    },
    /**
     * 根据信息属性获取信息
     * @param cid 栏目ID
     * @param attr 类别 0:全部信息1:推荐信息/2:置顶信息
     * @param count 获取条数
     */
    GetEnumByType: function (cid, attr, count, callback) {
        switch (attr) {
            case 0:
                _db.where("News", { ClassID: cid.toLowerCase(), IsAudit: true, DR: true }, { limit: count, sort: { CreateTime: -1 } }, function (err, data) {
                    if (err) {
                        logger.error('根据栏目获取新闻失败');
                        callback(err, null);
                    } else {
                        callback(err, data);
                    }
                })
                break;
            case 1:
                _db.where("News", { ClassID: cid.toLowerCase(), IsAudit: true, DR: true, IsRecommend: true }, { limit: count, sort: { CreateTime: -1 } }, function (err, data) {
                    if (err) {
                        logger.error('根据栏目获取新闻失败');
                        callback(err, null);
                    } else {
                        callback(err, data);
                    }
                })
                break;
            case 2:
                _db.find("News", { ClassID: cid.toLowerCase(), IsAudit: true, DR: true, IsTop: true }, { limit: count, sort: { CreateTime: -1 } }, function (err, data) {
                    if (err) {
                        logger.error('根据栏目获取新闻失败');
                        callback(err, null);
                    } else {
                        callback(err, data);
                    }
                })
                break;
        }
    }
}