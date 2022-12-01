import axios from "axios";

const getuser = axios.create({
    baseURL:'/api'
})

export const GetGoods = async function (data) {
    console.log(data,'data')
    let {username,password} = data
    let list = await getuser.post('/getinfo/goods',{
        username,password
    })
    return list
}

getuser.interceptors.request.use(function (config) {
    console.log('请求拦截器getuser')
    let stor = window.localStorage
    let tokens = stor.getItem("token")
    if(tokens){
        config.headers.token = tokens
    }
    return config
}, function (error) {
    return Promise.reject(error)
})

getuser.interceptors.response.use(function (response) {
    // let { authorization } = response.headers
    // console.log(authorization)
    // window.localStorage.setItem('token',authorization)
    console.log('响应拦截器')
    return response
}, function (error) {
    return Promise.reject(error)
})