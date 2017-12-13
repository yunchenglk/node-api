var _db = require('../lib/_db');
var logger = require('pomelo-logger').getLogger('mongodb-log');
var async = require('async');
module.exports = {
    /**
     * 用户登录
     * @param loginName 登录名
     * @param password 密码
     * @param companyid 公司ID
     * @param callback {_entity:实体,_status:密码验证}
     */
    login: function (loginName, password, companyid, callback) {
        this.SingleByLoginName(loginName, function (err, result) {
            if (result == null || err) {
                logger.error('登陆失败');
                callback('登陆失败', null);
            } else {
                async.auto({
                    _entity: function (done) {
                        done(err, result);
                    },
                    _status: ["_entity", function (result, done) {
                        if (result._entity == null) {
                            done("用户不存在", null);
                        } else {
                            done(null, result._entity.LoginPwd == password);
                        }

                    }]
                }, function (err, result) {
                    callback(err, result);
                })
            }
        })
    },
    /**
     * 根据登录名查询用户
     * @param loginName 登录名
     */
    SingleByLoginName: function (loginName, callback) {
        _db.findOne("USER", { LoginName: loginName }, function (err, data) {
            if (err) {
                logger.error('登录名查询用户失败');
                callback(err, null);
            } else {
                callback(err, data);
            }
        })
    }
}