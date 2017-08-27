/**
 * this file will be loaded before server started
 * you can define global functions used in controllers, models, templates
 */

/**
 * use global.xxx to define global functions
 * 
 * global.fn1 = function(){
 *     
 * }
 */

/**
 * 定义全局函数
 */

//日志系统
import { logger } from '../../common/logger/log'
import { handleResult } from '../../common/logger/handle_result'
import { handleSQL } from '../../common/logger/handle_sql'
import { handleParams } from '../../common/logger/handle_params'
//错误处理模块
import { errModule } from '../../common/handle_result/handle_error'
//成功处理模块
import { sucModule } from '../../common/handle_result/handle_success'

global.logger = logger;
global.handleResult = handleResult;
global.handleSQL = handleSQL;
global.handleParams = handleParams;
global.errModule = errModule;
global.sucModule = sucModule;