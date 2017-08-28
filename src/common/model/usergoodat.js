'use strict';
/**
 * model
 */
export default class extends think.model.base {
    init(...args) {
        super.init(...args);
        this.tablePrefix = ''; //数据表前缀
        this.tableName = 'T_user_goodAt'; //对应的数据表名
    }
}