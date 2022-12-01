import axios from "axios";

export const register = function (data) {
    return new Promise((resolve, reject) => {
        axios.request({
            method: 'POST',
            url: '/api' + '/apis/user/add',
            data
        }).then(res => {
            resolve(res)
        }, err => {
            reject(err)
        })
    })
}

export const deletelist = function (data) {
    return new Promise((resolve, reject) => {
        axios.request({
            method: 'POST',
            url: '/api' + '/api/user/delete/633aada637b48200787725a4',
            data
        }).then(res => {
            resolve(res)
        }, err => {
            reject(err)
        })
    })
}

export const list = function (data) {
    return new Promise((resolve, reject) => {
        axios.request({
            method: 'get',
            url: '/api' + '/api/user/list/633aada637b48200787725a4?page=1&limit=3',
            data
        }).then(res => {
            resolve(res)
        }, err => {
            reject(err)
        })
    })
}

export const login = function (data) {
    return new Promise((resolve, reject) => {
        axios.request({
            method: 'POST',
            url: '/api' + '/api/user/login',
            data
        }).then(res => {
            resolve(res)
        }, err => {
            reject(err)
        })
    })
}

// export default register