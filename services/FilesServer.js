var _db = require('../lib/_db');
var logger = require('pomelo-logger').getLogger('mongodb-log');
module.exports = {
    /**
     * 根据ID获取详细信息
     * @param id 文件ID
     */
    Single: function (id, callback) {
        _db.findOne("Files", { ID: id.toLowerCase() }, function (err, data) {
            if (err) {
                logger.error('根据ID查询一个栏目失败');
                callback(err, null);
            } else {
                callback(err, data);
            }
        })
    },
    /**
     * 获取RelationID的文件信息
     * @param RelationID 关联ID
     */
    GetRelationID: function (RelationID, callback) {
        _db.find("Files", { RelationID: RelationID.toLowerCase() }, function (err, data) {
            if (err) {
                logger.error('根据ID查询一个栏目失败');
                callback(err, null);
            } else {
                callback(err, data);
            }
        })

    }
}