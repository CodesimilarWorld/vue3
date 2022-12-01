const UserPub = require('../model/UserPub')

const UserPubMsg = {
    addmsg: async (username,msg,files,type,date,num,msglist) => {
        return UserPub.create({
            username,msg:msg,files,type,date,num,msglist
        })
    },

    findinfo: async (type) => {
        return UserPub.find({type:'msg'}).select({_id:0,username:1,msg:1,date:1,type:1,num:1,zan:1})
    }
}

module.exports = UserPubMsg