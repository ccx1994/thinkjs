'use strict';
/**
 * logic
 * @param  {} []
 * @return {}     []
 */
export default class extends think.logic.base {
    /**
     * index action logic
     * @return {} []
     */
    getallusersAction() {

        //预先逻辑处理入参 判断id不能为空
        const params = this.post();
        if (think.isEmpty(params.id)) {
            this.json(errModule.NULL_ERR('id'));
        }

    }

    getusergoodatAction() {

        //预先逻辑处理入参 判断id不能为空
        const params = this.post();
        if (think.isEmpty(params.id)) {
            this.json(errModule.NULL_ERR('id'));
        }

    }
}