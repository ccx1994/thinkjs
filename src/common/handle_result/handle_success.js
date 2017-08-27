//成功返回结果集
const SUCCESS = function(data) {
    return {
        isSuccess: 1,
        errorCode: null,
        errorMsg: null,
        result: data
    }
}

exports.sucModule = {
    SUCCESS //成功返回结果集
}