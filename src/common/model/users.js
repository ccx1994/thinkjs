'use strict';
/**
 * model
 */
export default class extends think.model.base {
    init(...args) {
        super.init(...args);
        this.tablePrefix = ''; //数据表前缀
        this.tableName = 'T_users'; //对应的数据表名
    }

    getGoodAt(id) {
        let whereJson = {};
        whereJson['T_users.id'] = id;
        return this.field('T_users.id,T_users.name,T_user_goodAt.goodAt').where(whereJson).join('T_user_goodAt ON T_user_goodAt.id = T_users.id').select();
    }
}