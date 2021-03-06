import axios from 'axios'
import { ElLoading } from 'element-plus'
const instance = axios.create({
    baseURL: '/api',
    timeout: 10000,
    headers: {
        post: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
})

export function requestGet(url, params, deploy) {
    return request('get', url, params, deploy)
}
export function requestPost(url, params, deploy) {
    return request('post', url, params, deploy)
}

function request(method, url, params = {}, deploy={}) {
    return new Promise((reslove, reject) => {
        const opction = {method, url}
        const methodObj = {post: 'data', get: 'params'}
        opction.deploy = deploy
        // 添加公共参数
        params.test = 1
        
        opction[methodObj[method]] = params
        
        if (deploy.headers && Object.keys(deploy.headers).length > 0) {
            opction.headers = deploy.headers
        }
        // if (method === 'post') {
        //     opction.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        // }
        instance(opction).then(response => {
            if (response.status === 200) {
                deploy.res && reslove(response.data)
                response.data.code === 200 && reslove(response.data.data)
                reject(response.data.msg)
            }
            reject(response.status)
        }).catch(error => {
            reject(error)
        });
    })
}

let loading = null
let idx = 0

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // if (config.method === 'post') {
    //     config.data.a = '1' // undefind
    // }
    // if (config.method === 'get') {
    //     config.params.a = '1' // undefined
    // }
    if (config.deploy.loading !== false) {
        idx += 1
        loading = ElLoading.service({
            lock: true,
            text: 'Loading',
            background: 'rgba(255, 255, 255, .9)',
        })
    }
    console.log(idx)
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    if (response.config.deploy.loading !== false) {
        idx -= 1
    }
    if (idx === 0) loading && loading.close()
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});