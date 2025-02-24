export default {
    method: 'get', // 默认请求方式
    baseURL: 'http://localhost:8001/',
     // 基础 url 前缀，便于为 axios 实例的方法传递相对 URL
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }, // 请求头信息
    timeout: 10000, // 设置超时时间
    withCredentials: true, // 携带凭证
    responseType: 'json' // 返回数据类型
}