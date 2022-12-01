import axios from 'axios'
// import md5 from 'js-md5'

// export const Login = function (data) {
//     return new Promise((resolve, reject) => {
//         axios.request({
//             method:'post',
//             url: '/api' + '/api/user/login',
//             data
//         }).then(res=>{
//             resolve(res)
//         })
//     })
// }

const getlogin = axios.create({
    baseURL:'/api'
})

export const Login = async (data) => {
    console.log(data,'data')
    let {username,password} = data
    let userinfo = await getlogin.post('/apis/user/login',{
        username,password
    })
    return userinfo
}

// const Login = axios.create({
//     baseURL:'/api',

// })


// export const $get = async (url, params) => {
//     let data = await Login.get(url, {
//         params
//     })
//     return data
// }

// export const $POST = async (url, params) => {
//     // let password = md5(params.password)
//     let data = await Login.post(url, {
//         params
//     })
//     return data
// }

getlogin.interceptors.request.use(function (config) {
    console.log('请求拦截器')
    let stor = window.localStorage
    let tokens = stor.getItem("token")
    if(tokens){
        config.headers.token = tokens
    }
    return config
}, function (error) {
    return Promise.reject(error)
})

getlogin.interceptors.response.use(function (response) {
    let { authorization } = response.headers
    console.log(authorization)
    window.localStorage.setItem('token',authorization)
    console.log('响应拦截器')
    return response
}, function (error) {
    return Promise.reject(error)
})