import {requestGet} from '@/http'

export function getindex () {
    return requestGet('api/index')
}


export function getindex1 (params) {
    return requestGet('api/index1', params)
}

export function getindex2 (params) {
    return requestGet('api/index2', params, {res: true})
}


export function getindex3 () {
    return requestGet('api/index3', {}, {res: true})
}