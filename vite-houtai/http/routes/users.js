var express = require('express');
var router = express.Router();
const UserPubs = require('../controllers/UserPubs')
const multer = require('multer')
// const upload = multer({ dest: 'public/uploads' })

const storage = multer.diskStorage({
  destination: function (req,file,cb){
    cb(null,'./public/uploads')
  },
  filename: function (req,file,cb) {
    cb(null,file.originalname)
  }
})
const upload = multer({
  storage:storage
})

/* GET users listing. */
// router.post('/user/addmsg', function(req, res, next) {
//   console.log(req.file,'req')
//   var url = '/uploads/' + req.file.filename
//   console.log(url,'url')
//   res.send({
//     ok:1,
//     url:url
//   });
// },(req,res)=>{
//   res.send({
//     ok:1,
//     url:url
//   });
// });

router.post('/addmsg', upload.single("avatar"), (req,res)=>{
  console.log(req.file,'file')
  res.send('ok')
})

router.get("/get",(req,res)=>{
  res.send('ok')
})

// router.post("/user/addmsg", upload.single("files"), UserPubs.PubMsg)

module.exports = router;
