var log4js = require('log4js');

//log4js基础配置
log4js.configure({
    appenders: {
        logger: {
            type: 'dateFile', //带日期的log文件
            filename: './logs/node-api.log' //文件目录
        }
    },
    categories: {
        default: {
            appenders: ['logger'],
            level: 'all' //全部输出
        }
    }
});
const logger = log4js.getLogger('logger');

exports.logger = logger;