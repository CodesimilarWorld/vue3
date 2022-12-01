const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserType = {
    username:String,
    msg:String,
    files:String,
    url:String,
    date:String,
    type:String,
    num:Number,
    msglist:String,
    commont:{String:String},
    zan:[String]
}

const UserPub = mongoose.model("Files",new Schema(UserType))

module.exports = UserPub