exports.handleResult = function(apiName, data) {
    let str = '接口名： ' + apiName + '  ----出参----  ' + JSON.stringify(data);
    return str;
}