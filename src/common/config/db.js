'use strict';
/**
 * db config
 * mysql、MongoDb基本配置
 * @type {Object}
 */
export default {
    type: 'mysql',
    adapter: {
        mysql: {
            host: '127.0.0.1',
            port: '3306',
            database: 'wensentDB',
            user: 'root',
            password: 'aBc882322438123',
            prefix: '', //数据表前缀
            encoding: 'utf8'
        },
        mongo: {

        }
    }
};