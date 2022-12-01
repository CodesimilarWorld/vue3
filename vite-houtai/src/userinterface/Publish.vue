<template>
  <div class="publish">
    <button @click="btn">btn</button>
    <div class="list">
      <div class="article" @click="btn(0)">发布动态</div>
      <!-- <div class="vedio">发布视频</div> -->
      <div class="msg" @click="btn(1)">
        消息管理
      </div>
    </div>
    <div class="content">
      <div class="text" v-show="num == 0">
        <textarea
          class="textarea"
          cols="5"
          rows="5"
          v-model="text"
          maxlength="50"
        ></textarea>
        <!-- <div class="img" v-show="false">
          <img src="" alt="">
        </div> -->
        <label for="file" class="label">添加图片</label>
        <input type="file" id="file" style="display: none" @change="file" ref="file" />
        <div class="pub" @click="pub">发布</div>
      </div>
      <div class="msglist" v-show="num == 1">
        <div class="tips" v-show="list == ''">暂无消息</div>
        <div class="msgs" v-for="(lis, index) in list" :key="index">
          {{ lis.msg }}
          <div class="date" style="float: right; font-size: 15px">
            {{ lis.date }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserPubMsg, UserFind, UserFiles } from "../Api/User";
import axios from 'axios'

export default {
  name: "Publish",
  data() {
    return {
      text: "",
      num: 0,
      list: [],
      files: "",
    };
  },
  methods: {
    blu() {
      alert("blur");
    },
    btn(num) {
      this.num = num;
    },
    async pub() {
      let text = this.text;
      let files = this.files;
      let msg = await UserPubMsg(text);
      this.text = ''
      console.log(msg);
    },
    async getinfo() {
      let typ = "type";
      let list = await UserFind(typ);
      if (list) {
        this.list = list.data;
      }
      this.list.forEach((item,index)=>{
        this.list[index].date = this.list[index].date.replace("2022.","")
      })
    },
    file(event) {
      console.log(event.target.files[0])
      // console.log(this.files);
      // const formsdata = new FormData()
      // formsdata.append("avatar",event.target.files[0])
      // axios.post("/api/users/addmsg",formsdata,{
      //   headers:{
      //     "Content-Type":"multipart/form-data"
      //   }
      // }).then(res=>{
      //   console.log(res.data)
      // },err=>{
      //   console.log(err)
      //   reject(err)
      // })
    },
    // async btn(){
    //   const formsdata = new FormData()
    //   console.log(this.$refs.files)
    //   // let list = await UserFiles(files)
    //   // console.log(list)
    // }
  },
  mounted(){
    

  }
};
</script>

<style lang="less" scoped>
.publish {
  width: 1177px;
  height: 700px;
  display: block;
  overflow: hidden;
  // background-color: teal;
  .list {
    width: 100%;
    height: 50px;
    display: flex;
    margin-top: 70px;
    .article,
    .vedio,
    .msg {
      width: 150px;
      height: 50px;
      background-color: rgb(234, 236, 236);
      // float: left;
      text-align: center;
      line-height: 45px;
      user-select: none;
    }
    .article,
    .vedio,
    .msg:hover {
      cursor: pointer;
    }
    .article {
      margin-left: 45px;
    }
  }
  .content {
    width: 100%;
    height: 550px;
    background-color: rgb(246, 245, 245);
    display: flex;
    justify-content: center;
    margin-top: 9px;
    .text {
      width: 700px;
      .textarea {
        width: 700px;
        height: 150px;
        outline: none;
        border-radius: 9px;
        border: 1px solid rgb(239, 237, 237);
        resize: none;
        margin-top: 19px;
        font-size: 21px;
        // text-indent: 5px;
        padding: 9px;
      }
      .label {
        position: relative;
        top: 9px;
        left: 9px;
        padding: 5px 9px 5px 9px;
        border-radius: 5px;
        background-color: aqua;
        font-size: 15px;
      }
      .pub {
        // width:90px;
        // height:33px;
        background-color: aqua;
        padding: 5px 24px 5px 24px;
        position: relative;
        top: 5px;
        left: 9px;
        float: right;
        text-align: center;
        border-radius: 5px;
      }
      .label,
      .pub:hover {
        cursor: pointer;
      }
    }
    .msglist {
      width: 100%;
      overflow: auto;
      .msgs {
        width: 750px;
        height: 90px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin: 15px 0 15px 0;
        padding: 5px;
        background-color: white;
        border-radius: 3px;
        display: flex;
        flex-wrap: wrap;
        .date{
          width:100%;
          align-self: flex-end;
          text-align: right;
          word-spacing: 5px;
        }
      }
    }
  }
}
</style>