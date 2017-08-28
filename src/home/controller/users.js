'use strict';

import Base from './base.js';

export default class extends Base {


    /**
     * 获取用户列表
     */
    async getallusersAction() {
        //入参分析
        let id = this.post('id');

        //打印入参日志
        logger.debug(handleParams('getAllUsers', this.post()));
        let model = this.model('users');
        try {
            let data = await model.where({ id: id }).select();
            //打印出参日志
            logger.debug(handleResult('getAllUsers', sucModule.SUCCESS(data)));
            //返回数据信息
            this.json(sucModule.SUCCESS(data));
        } catch (err) {
            //打印错误异常日志
            logger.error(err);
            //返回错误信息
            this.json(errModule.COMMON_ERR);
        }
        //打印sql日志
        logger.debug(handleSQL('getAllUsers', model.getLastSql()));
    }

    /**
     * 获取用户喜好 联表查询
     */
    async getusergoodatAction() {
        //入参分析
        let id = this.post('id');

        //打印入参日志
        logger.debug(handleParams('getusergoodat', this.post()));
        let model = this.model('users');
        try {
            let data = await model.getGoodAt(id);
            //打印出参日志
            logger.debug(handleResult('getusergoodat', sucModule.SUCCESS(data)));
            //返回数据信息
            this.json(sucModule.SUCCESS(data));
        } catch (err) {
            //打印错误异常日志
            logger.error(err);
            //返回错误信息
            this.json(errModule.COMMON_ERR);
        }
        //打印sql日志
        logger.debug(handleSQL('getusergoodat', model.getLastSql()));
    }

    /**
     * 添加用户
     */
    async adduserAction() {

        //入参分析
        let sex = this.post('sex');
        let name = this.post('name');
        let age = this.post('age');
        let goodAt = this.post('goodAt');

        //打印入参日志
        logger.debug(handleParams('adduser', this.post()));
        let model = this.model('users');
        let goodAtModel = this.model('usergoodat');
        try {
            let addUser = await model.transaction(async() => {
                    await model.add({
                        name: name,
                        sex: sex,
                        age: age
                    });
                    await goodAtModel.add({
                        goodAt: goodAt
                    });
                })
                //打印出参日志
            logger.debug(handleResult('adduser', sucModule.SUCCESS(null)));
            //返回数据信息
            this.json(sucModule.SUCCESS(null));
        } catch (err) {
            //打印错误异常日志
            logger.error(err);
            //返回错误信息
            this.json(errModule.COMMON_ERR);
        }
        //打印sql日志
        logger.debug(handleSQL('adduser', model.getLastSql()));
    }

}