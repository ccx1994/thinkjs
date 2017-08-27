//用户名或密码错误
const PASSWORD_ERR = {
    isSuccess: 0,
    errorCode: "0000",
    errorMsg: "用户名或密码错误",
    result: null
};

//未知错误
const COMMON_ERR = {
    isSuccess: 0,
    errorCode: "0001",
    errorMsg: "未知错误",
    result: null
}

//某参数不能为空错误
const NULL_ERR = (param) => {
    return {
        isSuccess: 0,
        errorCode: "0002",
        errorMsg: param + '不能为空！',
        result: null
    }
}

exports.errModule = {
    PASSWORD_ERR,
    COMMON_ERR,
    NULL_ERR
}