<template>
  <div class="router">
    <div class="content">
      <div class="interface">
        <div class="top"></div>
        <div class="list">
          <svg
            style="position: absolute; width: 0; height: 0"
            width="0"
            height="0"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="svg-sprite"
            id="svg-sprite"
            ref="svgs"
          >
            <defs>
              <filter id="filter" ref="filter">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.000001 0.000001"
                  numOctaves="1"
                  result="warp"
                  seed="1"
                  ref="feTurbulence"
                ></feTurbulence>
                <feDisplacementMap
                  xChannelSelector="R"
                  yChannelSelector="G"
                  scale="30"
                  in="SourceGraphic"
                  in2="warp"
                ></feDisplacementMap>
              </filter>
            </defs>
          </svg>
          <div class="body-section">
            <div class="half">
              <div
                :class="this.num == 1 ? 'user user1' : 'user'"
                class="btn btn-small btn-dark btn-glitch-active"
                @click="selec1"
              >
                用户界面
              </div>
            </div>
          </div>
          <div
            :class="
              this.show
                ? 'goods goods1 goodscolor'
                : this.num == 2
                ? 'goods goodscolor'
                : 'goods'
            "
            @click="selec2"
          >
            <div class="title">
              <div>物品管理</div>
              <svg
                t="1665577024679"
                :class="this.num == 2 ? 'icon' : 'icon1'"
                @click="this.show = !this.show"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2550"
                width="128"
                height="128"
              >
                <path
                  d="M512.726547 675.318646c-8.063653 0-15.790638-3.245927-21.435195-9.006118L231.175103 400.906809c-11.603269-11.837606-11.410887-30.840402 0.427742-42.442648 11.837606-11.601222 30.841426-11.410887 42.442648 0.427742l238.681054 243.534596L751.407602 358.891903c11.601222-11.839653 30.602995-12.033058 42.442648-0.427742 11.839653 11.603269 12.031011 30.605042 0.427742 42.442648L534.161742 666.312528C528.517185 672.072719 520.791224 675.318646 512.726547 675.318646z"
                  p-id="2551"
                  fill="#2c2c2c"
                ></path>
              </svg>
            </div>
            <div class="add">物品添加</div>
            <div class="getdata">物品数据</div>
          </div>
          <div
            :class="this.num == 3 ? 'publish publish1' : 'publish'"
            @click="selec3"
          >
            发布消息
          </div>
          <div
            :class="this.num == 4 ? 'useradmini useradmini1' : 'useradmini'"
            @click="selec4"
          >
            用户管理
          </div>
          <div :class="this.num == 5 ? 'data data1' : 'data'" @click="selec5">
            数据图表
          </div>
          <div>+</div>
          <button @click="exit">退出登录</button>
        </div>
        <!-- <input type="text" v-model="release" />
        <button @click="dynamic">发布内容</button>
        <button @click="rout">router</button>
        <button @click="btn">btn</button> -->
        <div class="view">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { list } from "../Api/Register";
import { Dynamic } from "../Api/Getuser";

export default {
  name: "User",
  data() {
    return {
      release: "",
      num: 1,
      show: false,
    };
  },
  methods: {
    exit() {
      let stor = window.localStorage;
      stor.clear();
      this.$router.push("/login");
    },
    async dynamic() {
      let msg = { username: "user", dynamic: this.release };
      let msglist = await Dynamic(msg);
      console.log(msglist);
    },
    rout() {
      this.$router.push({
        path: "/documen",
        query: {
          name: "name",
        },
      });
    },
    btn() {
      this.goods = "goods goods1";
    },
    selec1() {
      this.num = 1;
      this.$router.push("/user/usercentent");
      this.show = false;
    },
    selec2() {
      this.num = 2;
      this.$router.push("/user/goods");
      this.class = "icon";
    },
    selec3() {
      this.num = 3;
      this.$router.push("/user/publish");
      this.show = false;
    },
    selec4() {
      this.num = 4;
      this.$router.push("/user/userlist");
      this.show = false;
    },
    selec5() {
      this.num = 5;
      this.$router.push("/user/echarts");
      this.show = false;
    },
  },
  async beforeMount() {
    // let lis = await list();
    // console.log(lis);
    // this.selec1()
    console.log(this.$route.href);
    if (this.$route.href == "/user/usercentent") {
      this.num = 1;
    } else if (this.$route.href == "/user/goods") {
      this.num = 2;
    } else if (this.$route.href == "/user/publish") {
      // this.$router.push("/user/publish")
      this.num = 3;
    } else if (this.$route.href == "/user/userlist") {
      this.num = 4;
    } else if (this.$route.href == "/user/echarts") {
      this.num = 5;
    }
  },
};
</script>

<style scoped lang="less">
.router {
  width: 1439px;
  height: 100vh;
  overflow: hidden;
  .content {
    width: 1439px;
    height: 100vh;
    display: flex;
    justify-content: center;
    .interface {
      width: 1439px;
      min-width: 1439px;
      height: 100vh;
      border: 1px solid gray;
      // margin-top: 15px;
      // border-radius: 9px;
      display: block;
      box-sizing: border-box;
      .top {
        width: 100%;
        height: 50px;
        background-color: palegoldenrod;
        // border-radius: 9px 9px 0 0;
      }
      .list {
        width: 255px;
        height: 705px;
        border-radius: 0 0 0 9px;
        float: left;
        border-right: 1px solid palegoldenrod;
        position: fixed relative;
        .user,
        .goods,
        .publish,
        .useradmini,
        .data {
          width: 100%;
          letter-spacing: 3px;
          text-align: center;
          font-size: 19px;
          line-height: 50px;
          background-color: rgb(239, 237, 237);
        }
        .user1,
        .goodscolor,
        .publish1,
        .useradmini1,
        .data1 {
          background-color: rgb(215, 210, 210);
        }
        .user,
        .goods,
        .publish,
        .useradmini,
        .data:hover {
          cursor: pointer;
        }
        .user {
          height: 50px;
        }
        .goods {
          height: 50px;
          overflow: hidden;
          transition: height 0.1s linear;
          .title {
            display: flex;
            height: 50px;
            text-align: center;
            justify-content: center;
            div {
              position: relative;
              left: 0px;
            }
            .icon {
              width: 19px;
              position: absolute;
              transform: translate(90px, -39px);
            }
            .icon1 {
              display: none;
            }
          }
          .add {
            height: 45px;
            font-size: 17px;
            background-color: rgb(245, 243, 243);
            border-bottom: 1px solid rgb(211, 210, 210);
          }
          .getdata {
            height: 45px;
            font-size: 17px;
            background-color: rgb(245, 243, 243);
          }
        }
        .goods1 {
          height: 140px;
        }
      }
      .view {
        width: 1170px;
        min-width: 1170px;
        height: 705px;
        float: left;
        // overflow: hidden;
      }
    }
  }
}
</style>