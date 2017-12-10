var _db = require('../lib/_db');
var logger = require('pomelo-logger').getLogger('mongodb-log');
module.exports = {
    /**
     *  获取子栏目
     * @param id 栏目ID
     * @param cid 公司ID
     */
    GetChildByID: function (id, cid, callback) {
        _db.find("Class", { ParentID: id.toLowerCase(), CompanyID: cid.toLowerCase(), DR: false }, function (err, data) {
            if (err) {
                logger.error('获取子栏目失败');
                callback(err, null);
            } else {
                callback(err, data);
            }
        })
    },
    /**
     * 根据ID查询一个栏目
     * @param id 栏目ID
     */
    Single: function (id, callback) {
        _db.findOne("Class", { ID: id.toLowerCase() }, function (err, data) {
            if (err) {
                logger.error('根据ID查询一个栏目失败');
                callback(err, null);
            } else {
                callback(err, data);
            }
        })


    },
    /**
     * 获取公司下所有栏目
     * @param cid 公司ID
     */
    GetEnumByCID: function (cid, callback) {
        _db.find("Class", { CompanyID: cid.toLowerCase() }, function (err, data) {
            if (err) {
                logger.error('获取公司下所有栏目失败');
                callback(err, null);
            } else {
                callback(err, data);
            }
        })

    }
}