import axios from 'axios'

export const GetDocumen = function (data) {
    return new Promise((resolve, reject) => {
        axios.request({
            method:'POST',
            url: '/apis' + '/api/user/getdocumen',
            data
        }).then(res=>{
            resolve(res)
        })
    })
}