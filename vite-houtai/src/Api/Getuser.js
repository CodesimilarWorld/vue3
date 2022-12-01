import axios from 'axios'

export const Dynamic = function (data) {
    return new Promise((resolve, reject) => {
        axios.request({
            method:'post',
            url: '/api' + '/api/user/dynamic',
            data
        }).then(res=>{
            resolve(res)
        })
    })
}