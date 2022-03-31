import axios from "axios";
import { ElLoading } from 'element-plus';
const instance = axios.create({
    baseURL: 'http://localhost:3001/',
    timeout: 1000,
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

function request(method ,url, params={}, deploy={}) {
    return new Promise((reslove, reject) => {
        // instance[method](url, params).then(res => {
        //     reslove(res)
        // }).catch(err => {
        //     reject(err)
        // })

        // deploy：{
        //     loading: false, // 关闭加载动画
        //     res: true, // 返回全部数据
        //     headers: {} // 添加自定义请求头
        // }

        const opction = {method, url}
        const opctionMethod = {post: 'data', get: 'params'}

        opction.deploy = deploy

         // 公共参数
         params.text= 1

        opction[opctionMethod[method]] = params

        if(deploy.headers && Object.keys(deploy.headers).length > 0) {
            opction.headers = deploy.headers
        }

        instance(opction).then(res => {
            // if(res.status === 200) {
            //     if(deploy.res) {
            //         reslove(res.data)
            //     }
            //     if(res.data.code === 200) {
            //         reslove(res.data.data)
            //     } else {
            //         reject(res.data.msg)
            //     }
            // } else {
            //     reject(res.status)
            // }

            if(res.status === 200) {
                deploy.res && reslove(res.data)
                res.data.code === 200 && reslove(res.data.data)
                reject(res.data.msg)
            } else {
                reject(res.status)
            }
            
        }).catch(err => {
            reject(err)
        })

    })
}

let loading = null
let idx = 0

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if (config.deploy.res !== false) {
        loading = ElLoading.service({
            lock: true,
            text: 'Loading',
            background: 'rgba(0, 0, 0, 0.7)',
        })
        idx += 1
    }

    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {

    if(idx = 0) loading && loading.close()
    if(response.config.deploy.res !== false) {
        idx -= 1
    }
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });