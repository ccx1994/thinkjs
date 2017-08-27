exports.handleParams = function(apiName, data) {
    let str = '接口名： ' + apiName + '  ----入参----  ' + JSON.stringify(data);
    return str;
}