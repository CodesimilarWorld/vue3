const UserPub = require('../services/UserPubMsgs')
// const JWT = require('../util/JWT')
// const nanoid = require('nanoid')
const multer = require('multer')
const upload = multer({ dest: 'public/uploads' })

const UserPubs = {
    PubMsg: async (req, res) => {
        let username = 'username'
        let { msg } = req.body
        let files = ''
        let type = 'msg'
        let dates = new Date()
        let date = dates.getFullYear() + '.' + dates.getMonth() + '.' + dates.getDate() + ' ' + dates.getHours() + '.' + dates.getMinutes()
        let num = dates.getFullYear() + dates.getMonth() + dates.getDate() + dates.getHours() + dates.getMinutes() + dates.getSeconds()
        // let msgnum = await UserPub.findinfo(username,type).count()
        let msgnum = 0
        let msglist = 'list' + msgnum + 1
        let list = await UserPub.addmsg(username, msg, files, type, date, num, msglist)
        // console.log(list)
        res.send('ok')
    },

    FindMsg: async (req, res) => {
        let { type } = req.body
        let list = await UserPub.findinfo(type)
        res.send(list)
    }
}

module.exports = UserPubs