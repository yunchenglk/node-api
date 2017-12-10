var _db = require('../lib/_db');
var logger = require('pomelo-logger').getLogger('mongodb-log');

module.exports = {
    /**
     * 连写查询
     * @param table_name 表名
     * @param pageInfo 页数信息
     * @param conditions 查询条件 {a:1, b:2}
     * @param callback 回调方法
     */
    getPage: function (table_name, pageInfo, conditions, callback) {
        this.getPageCount(table_name, conditions, function (err, res) {
            if (err) {
                callback(err);
            } else {
                if (res > 0) {
                    _db.where(table_name,)







                } else {
                    callback("未检索到信息");
                }
            }
        })

    },
    /**
     * 查询总条数
     * @param table_name 表名
     * @param conditions 查询条件 {a:1, b:2} 
     * @param callback 回调方法
     */
    getPageCount: function (table_name, conditions, callback) {
        _db.count(table_name, conditions, function (err, res) {
            if (err) {
                callback(err);
            } else {
                console.log(res);
                callback(null, res);
            }
        })
    }
}