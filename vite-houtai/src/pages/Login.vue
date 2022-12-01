<template>
<div class="div" id="div">
    <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpc.xiaopi.com%2Fuploadfile%2F2020%2F0306%2F20200306015713168.jpeg&refer=http%3A%2F%2Fpc.xiaopi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671181094&t=20644cc0806c5bc57fe8324b809a3a62" alt="" />
  </div>
  <div class="content">
    <div :class="this.class" @mousemove="mousermove" id="mousermove">
      <div class="fluter"></div>
      <div :class="this.class1">
        <p :class="this.class2">用户名</p>
        :
        <input
          type="text"
          v-model="username"
          @focus="userinput"
          @blur="userinput1"
        /><br />
        <p :class="this.class3">密码</p>
        :
        <input
          type="password"
          v-model="userpassword"
          @focus="userpasswords"
          @blur="userpasswords1"
        /><br />
        <div class="register" @click="register">用户注册</div>
        <div :class="class4" @click="login"><p class="p">登录</p></div>
        <div class="tourist" @click="tourist">游览</div>
        <!-- <div class="delete" @click="deletelist">删除数据</div>
        <div class="get" @click="list">用户大厅</div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import { $get } from "../Api/login";
import { Login } from "../Api/login";
import { register, deletelist, list } from "../Api/Register";
import md5 from "js-md5";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      userpassword: "",
      class: "signbox",
      class1: "sign",
      class2: "user",
      class3: "password",
      class4: "login",
    };
  },
  methods: {
    async register() {
      let user = { username: this.username, password: this.userpassword };
      // console.log( user.username.trim()=='')
      let reg = /\w{8}/;
      let reg1 = /\s/;
      let w = /\W/;
      console.log(w.test(this.username), "w");
      // console.log(regs.test(user.username), "regs");
      // console.log(typeof this.username)
      if (
        w.test(user.username) == true ||
        w.test(user.password) == true ||
        user.username == "" ||
        user.password == ""
      ) {
        alert("账号密码不能为空或带特殊字符");
      } else if (
        reg.test(user.username) == true ||
        reg.test(user.password) == true
      ) {
        alert("账号密码长度不能超出5");
      } else {
        alert("后端未开放")
        return
        let registe = await register(user);
        console.log(registe);

        if (registe.status === 203) {
          alert(registe.data);
          this.userpassword = "";
        }
        if (registe.status === 201) alert("注册成功！");
      }
      // let registe = await register(user);
      // console.log(registe);

      // if(registe.status===203){
      //    alert('账号重复')
      //    this.userpassword = ''
      // }
      // if(registe.status===201) alert('注册成功！')
    },
    async login() {
      let user = { username: this.username, password: this.userpassword };
      let login = await Login(user);
      console.log(login);
      if (login.status === 201) {
        // this.class2 = "user user1";
        // this.class3 = "password password1";
        // this.class4 = "login login1"
        this.class = "signbox1";
        this.class1 = "sign1";
        setTimeout(() => {
          this.$router.push("/user/usercentent");
        }, 1000);
      } else {
        alert("验证失败");
      }
    },
    async list() {
      let lis = await list();
      console.log(lis);
    },
    tourist() {
      this.class = "signbox1";
      this.class1 = "sign1";
      setTimeout(() => {
        this.$router.push("/tourist");
      }, 1000);
    },
    userinput() {
      // alert('as')
      this.class2 = "user user1";
    },
    userinput1() {
      this.class2 = "user";
    },
    userpasswords(){
      this.class3 = "password password1"
    },
    userpasswords1(){
      this.class3 = "password"
    },
    mousermove(event) {
      // console.log(event)
    },
  },
  mounted() {
    var d = document.getElementById("mousermove");
    var fluter = document.querySelector(".fluter");
    d.onmousemove = function (event) {
      fluter.style.left = event.clientX - 410 + "px";
      fluter.style.top = event.clientY - 150 + "px";
    };
    d.onmouseout = function () {
      fluter.style.left = -350 + "px";
      fluter.style.top = -350 + "px";
    };

    var div = document.getElementById('div');
    var n = 0;
    window.onmousemove = (event) => {
      var e = event;
      x>1? 9:-9
      var x = 0
      if(e){
      if(x>9||x<-9) return
      e.movementX>1? 7:-7
        x = -(e.movementX-2.4)/1.9;
      }
      // var y = e.movementY
      var y = (e.screenY - e.clientY) / 100;
      if (event.movementY > 0) {
        if (n < -25) return;
        n--;
        // console.log(n);
      } else {
        if (n > 50) return;
        n++;
        // console.log(n);
      }
      if(x>34){
        x=34
      } else if(x<-34){
        x=-34
      }
      // console.log(x,'x')
      div.style.cssText = `transform:skewX(${-(x - 2.7) + "deg"}) translate(${
        x * 5
      }px,${n}px);`;
      var z = e.pageX - (e.pageX - 5);
    };
    window.onmouseout = () => {
      div.style.cssText = "transform:none";
      // window.onmousemove = null
    };
  },
  beforeUnmount(){
    window.onmousemove = ''
  }
};
</script>

<style scoped lang="less">
//  ::-webkit-scrollbar { display: none}
.div {
  width: 100vw;
  height: 100vh;
  position: relative;
  /* transform: skewX(160deg); */
  background-color: aqua;
  transition: 1s;
  // overflow: hidden;
  // z-index:15;
  img {
    width: 150%;
    height: 150%;
    background: no-repeat;
    position: relative;
    transform: translate(-255px,-340px);
  }
}
.content {
  width: 100vw;
  height: 100vh;
  // background: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e6815fd423e511013fdcc74287ea.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667796632&t=6e04993d9bc86790c530bad4d8a4d680);
  background-size: 100% 100%;
  overflow: hidden;
  position:absolute;
  top: 0px;
  left:0px;
  .signbox {
    width: 50vw;
    height: 80vh;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: signbox1 1s both;
    // background-color: rgba(215, 229, 229, 0.7);
    transition: 1s both;
    animation-delay: 0.3s;
    overflow: hidden;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 50vw;
      height: 80vh;
      box-sizing: border-box;
      border: 1px solid #d46ee8;
      transition: 0.5s both;
    }
    &::before {
      clip-path: inset(900px 900px 0 0);
      animation: 1s as1 both;
    }
    &::after {
      clip-path: inset(0 0 900px 900px);
      animation: 1s ask1 both;
    }
    .fluter {
      width: 190px;
      height: 19px;
      position: absolute;
      left: -350px;
      top: -350px;
      background-color: rgba(218, 203, 223, 0.5);
      border-radius: 50%;
      box-shadow: 0 0 55px 1px rgb(220, 198, 227);
      filter: blur(15px);
      transform: translate(70px, 90px);
    }
  }
  @keyframes as1 {
    100% {
      clip-path: inset(0 0 0 0px);
    }
  }
  @keyframes ask1 {
    100% {
      clip-path: inset(0 0 0 0);
    }
  }
  @keyframes signbox1 {
    100% {
      background-color: rgba(229, 215, 229, 0.7);
    }
  }
}
.signbox1 {
  width: 50vw;
  height: 80vh;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(215, 229, 229, 0.7);
  animation: signbox 0.7s both;
  border: none;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50vw;
    height: 80vh;
    box-sizing: border-box;
    border: 1px solid #d46ee8;
    transition: 0.5s both;
  }
  &::before {
    clip-path: inset(0 0 0 0px);
    animation: 1s as both;
  }
  &::after {
    clip-path: inset(0 0 0 0);
    animation: 1s ask both;
  }
}
@keyframes as {
  100% {
    clip-path: inset(0 900px 950px 0px);
  }
}
@keyframes ask {
  100% {
    clip-path: inset(950px 0 0 900px);
  }
}
@keyframes signbox {
  100% {
    background-color: rgba(0, 0, 0, 0);
    // margin-top: 550px;
    // opacity: 0;
  }
}
.sign {
  width: 350px;
  height: 50%;
  position: relative;
  z-index: 9;
  transition: 0.5s linear;
  opacity: 0;
  animation: sign 0.5s both;
}
.sign1 {
  width: 350px;
  height: 50%;
  position: relative;
  z-index: 9;
  transition: 0.5s linear;
  animation: sign1 0.3s both;
}
@keyframes sign {
  100% {
    opacity: 1;
  }
}
@keyframes sign1 {
  100% {
    opacity: 0;
  }
}
.user,
.password {
  width: 55px;
  min-width: 55px;
  height: 30px;
  text-align: justify;
  display: inline-block;
  text-justify: distribute-all-lines;
  text-align-last: justify;
  color: rgb(39, 6, 64);
  transition: all 0.1s linear;
  animation: user 1.3s both;
  opacity: 0;
}
@keyframes user {
  100% {
    opacity: 1;
  }
}
.user1,
.password1 {
  animation: user1 1.9s infinite;
}
@keyframes user1 {
  1% {
    opacity: 1;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}
// .user1,
// .password1 {
//   color: aqua;
// }
input {
  width: 70%;
  height: 30px;
  margin: 9px 0 0 9px;
  border-radius: 3px;
  border: 1px solid rgb(222, 234, 234);
  font-size: 19px;
  background-color: rgb(248, 248, 247);
  transition: 1s;
  color: teal;
}
input:focus {
  outline: none;
}
.register {
  width: 80px;
  height: 30px;
  text-align: center;
  margin: 9px 0 0 19px;
  font-weight: bold;
  font-size: 15px;
  float: left;
}
.login {
  width: 80px;
  height: 33px;
  background-color: #f29100;
  float: right;
  border-radius: 5px;
  border: 1.5px solid #fdf6ec;
  text-align: center;
  margin: 15px 35px 0 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s linear;
  .p {
    width: 39px;
    height: 25px;
    text-align: justify;
    display: inline-block;
    text-justify: distribute-all-lines;
    text-align-last: justify;
  }
}
.tourist {
  position: absolute;
  // top:75px;
  // left:30px;
  // top:50%;
  left: 50%;
  transform: translate(-50%, 75px);
  color: rgb(129, 235, 235);
}
.tourist:hover {
  cursor: pointer;
}
// .login1 {
//   background-color: aqua;
// }
.register,
.login,
.delete,
.get:hover {
  cursor: pointer;
}
</style>
