import axios from "axios";

const UserPub = axios.create({
    baseURL: '/api'
})

export const UserPubMsg = async (text, files) => {
    let UserMsg = await UserPub.post('/apis/user/addmsg', {
        msg: text
    })
    return UserMsg
}

export const UserFind = async (typ) => {
    let UserMsg = await UserPub.post('/apis/user/getinfo', {
        type: typ
    })
    return UserMsg
}

export const UserFiles = async (files) => {
    let UserFiles = await UserPub.post('/users/user/addmsg', {
        file: files
    }, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    return UserFiles
}