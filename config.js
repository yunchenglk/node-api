var path = require('path');
var Config = {
    site: {
        title: '测试内容',
        description: '开源、分享，专注开发，用Coding创造财富',
        version: '2.0.1',
        duoshuo: {
            short_name: 'gefangshuai'   // 请将这里替换成自己的
        }
    },
    db: {
        cookieSecret: 'blogbynodesecret',
        db_host: "39.106.117.151",
        db_port: 27017,
        db_name: "0359idatabase",
        db_user: "",
        db_pwd: "",
        table_url: path.join(__dirname, 'config/table.json')
    }
}
module.exports = Config;