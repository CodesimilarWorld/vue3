<template>
  <div class="goods">
    <button @click="btns">btn</button>
    <div class="meru">
      <div class="selec">批量管理</div>
      <div class="add">添加物品</div>
    </div>
    <div class="goodslist">
      <div class="title">
        <div class="img">图片</div>
        <div class="goodsinfo">信息</div>
        <div class="goodsclass">分类</div>
        <div class="goodsquantity">数量</div>
        <div class="goodsprice">价格</div>
      </div>
      <div class="list" v-for="(lis, index) in this.infolist" :key="index">
        <div class="imgs">
          <img :src="lis.img" alt="" />
        </div>
        <div class="info">
          <div class="infomsg">{{ lis.infomsg }}</div>
        </div>
        <div class="class">
          <div class="classmsg">
            {{ lis.classmsg }}
          </div>
        </div>
        <div class="quantity">
          <div class="quantityms">
            {{ lis.quantitymsg }}
          </div>
        </div>
        <div class="price">
          <div class="pricemsg">
            {{ lis.pricemsg }}
          </div>
        </div>
        <div class="updata" @click="updata(lis)">
          <svg
            t="1666005467959"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2565"
            width="128"
            height="128"
          >
            <path
              d="M684.202667 117.248c15.893333-15.872 42.154667-15.36 58.922666 1.408l90.517334 90.517333c16.661333 16.661333 17.344 42.986667 1.429333 58.922667l-445.653333 445.653333c-7.936 7.914667-23.104 16.746667-34.218667 19.776l-143.701333 39.253334c-21.909333 5.994667-35.114667-7.104-29.568-28.949334l37.248-146.773333c2.773333-10.944 11.562667-26.346667 19.392-34.176l445.653333-445.653333zM268.736 593.066667c-2.901333 2.901333-8.106667 12.074667-9.130667 16.021333l-29.12 114.773333 111.957334-30.570666c4.437333-1.216 13.632-6.549333 16.810666-9.728l445.653334-445.653334-90.517334-90.496-445.653333 445.653334zM682.794667 178.986667l90.517333 90.517333-30.186667 30.186667-90.496-90.517334 30.165334-30.165333z m-362.026667 362.048l90.496 90.517333-30.165333 30.165333-90.517334-90.496 30.165334-30.186666zM170.666667 874.666667c0-11.776 9.429333-21.333333 21.461333-21.333334h661.077333a21.333333 21.333333 0 1 1 0 42.666667H192.128A21.333333 21.333333 0 0 1 170.666667 874.666667z"
              fill="#2c2c2c"
              p-id="2566"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="page">
      <div class="pagemenu">
        <div class="upper" @click="upper">←</div>
        <div
          :class="this.num == lis - 1 ? 'pagelist pagelist1' : 'pagelist'"
          class="pagelist"
          v-for="(lis, index) in this.length"
          :key="index"
          @click="pag(lis - 1)"
        >
          {{ lis }}
        </div>
        <div class="lower" @click="lower">→</div>
      </div>
      <div class="yeshu">总页数{{ page.length }}当前{{ pagenum }}<br /></div>
    </div>
    <div class="updatamsg" v-show="updatalist.show">
      <div class="imglist">
        <img :src="imagePreviewUrl" alt="" v-show="imagePreviewUrl" />
        <label for="files" class="label">图片上传</label>
        <input
          type="file"
          @change="fileimg"
          name=""
          id="files"
          accept=".png, .jpg, .jpeg"
          style="display: none"
        />
      </div>
      <div class="infolist">
        <div class="msg">
          <div class="title">标题</div>
          <input type="text" :value="updatalist.infomsg" />
        </div>
        <div class="notes">
          <div class="Subheading">副标题</div>
          <input type="text" />
        </div>
      </div>
      <div class="class">
        <select>
          <option value="1">商 品</option>
          <option value="2">蔬 菜</option>
          <option value="3">商 品</option>
          <option value="4">商 品</option>
          <option value="5">商 品</option>
        </select>
      </div>
      <div class="price">
        <input type="text" :value="updatalist.pricemsg" />
      </div>
      <button @click="remove">删除</button>
    </div>
  </div>
</template>

<script lang="ts">
import { mapMutations } from "vuex";
import { GetGoods } from "../Api/Get";

export default {
  name: "Goods",
  data() {
    return {
      infolist: [],
      pagelist: [],
      num: 0,
      pagenum: 1,
      page: [],
      updatanum: 0,
      updatalist: [],
      imagePreviewUrl: "",
      pagelength: [],
      length: [],
      goods:[]
    };
  },
  methods: {
    btn() {
      this.$store.commit("page", 0);
      this.$store.commit("findfile");
      this.pages = this.$store.state.pagelength;
      this.$store.commit("pagelist");
      this.infolist = this.$store.state.page;

      for (
        let i = 0;
        i < Math.ceil(this.$store.state.infolist.length / 3);
        i++
      ) {
        this.pagelength[i] = i + 1;
      }

      console.log(this.pagelength.length, "lengths");

      if (this.pagenum == 1) {
        this.length = this.pagelength.slice(
          (this.pagenum - 1) * 5,
          this.pagenum * 5
        );
      }

      this.pagelist = this.$store.state.infolist.slice(
        this.num * 3,
        (this.num + 1) * 3
      );
    },
    pag(num: number) {
      this.num = num;
    },
    upper() {
      if (this.pagenum > 1 && this.num == 5 * (this.pagenum - 1)) {
        this.pagenum--;
        this.num--;
      } else if (this.num >= 1) {
        this.num--;
      } else {
        return;
      }
    },
    lower() {
      if (
        this.num >= this.$store.state.num - 1 &&
        this.pagenum >= this.pagelength.length / 5
      ) {
        return;
      } else if (this.num == 5 * this.pagenum - 1) {
        this.pagenum++;
        this.num++;
      } else {
        this.num++;
      }
    },
    updata(lis: FunctionStringCallback) {
      this.updatalist = lis;
      console.log(this.updatalist);
      this.updatalist.show = true;
    },
    createImagePrieview(file: Blob) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = (event) => {
        this.imagePreviewUrl = event.target?.result;
        console.log(this.imagePreviewUrl)
      };
    },
    fileimg(event: Event) {
      const currenTarget = event.target as HTMLInputElement;

      if (currenTarget.files) {
        const file = currenTarget.files[0];
        this.createImagePrieview(file);
      }
    },
    remove() {
      this.$store.commit("findfile", this.updatalist);
      this.$store.commit("page", this.num);
      this.infolist = this.$store.state.page;
      this.pagelist = this.$store.state.infolist.slice(
        this.num * 3,
        (this.num + 1) * 3
      );
      this.updatalist.show = !this.updatalist.show;

      console.log(this.pagelength, "list");
      // console.log(this.$store.state.num, "num");
      console.log(Number(this.updatalist.pricemsg), "updata");
      console.log(this.updatalist.length);

      if (this.pagelength.length - this.$store.state.num == 1) {
        this.pagelength.pop();
        // this.updatalist.forEach((item:string)=>{
        //   this.pagelength.filter((items:string)=> console.log(items))
        // })

        console.log(this.pagelength.length, "for");
        this.length = this.pagelength.slice(
          (this.pagenum - 1) * 5,
          this.pagenum * 5
        );
        if (this.pagelength.length > this.num) {
          // this.pag(this.pagelength.length-1)
          // this.pagelength.length--
          //   this.pag(this.num--)
        } else {
          this.pag(this.pagelength.length - 1);
        }
        console.log(this.pagenum, "pagenum");
        console.log(this.num);
        this.pag(this.num);
        if (this.pagenum > 1) {
          if ((this.pagenum - 1) * 5 > this.num) {
            this.pagenum--;
            this.pag(this.num);
          }
        }
        this.length = this.pagelength.slice(
          (this.pagenum - 1) * 5,
          this.pagenum * 5
        );
      }
    },
    btns(){

    }
  },

  watch: {
    num(newValue, oldValue) {
      // console.log(newValue, "newvalue");
      this.$store.commit("page", newValue);
      this.infolist = this.$store.state.page;
      console.log(this.pagenum, "pagenum");
      console.log(this.num);
    },
    pagenum(newValue) {
      this.length = this.pagelength.slice(
        (this.pagenum - 1) * 5,
        this.pagenum * 5
      );
      console.log(
        this.pagenum,
        "1",
        Math.floor(this.pagelength.length / 5),
        "2",
        this.length,
        "3"
      );
    },
  },
  async beforeMount() {
    this.btn();
    let datas = {username:'name',password:'aaa'}
    let index = await GetGoods(datas)
    console.log(index.data)
    this.goods = index.data
  },
};
</script>

<style scoped lang="less">
.goods {
  width: 1177px;
  height: 700px;
  display: block;
  overflow: hidden;
  .meru {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: right;
    align-items: center;
    position: relative;
    top: 50px;
    .selec,
    .add {
      width: 90px;
      height: 75%;
      background-color: rgba(250, 164, 4, 0.5);
      text-align: center;
      line-height: 35px;
      border-radius: 5px;
      user-select: none;
    }
    .selec {
      margin-right: 80px;
    }
    .add {
      margin-right: 90px;
    }
    .selec,
    .add:hover {
      cursor: pointer;
    }
  }
  .goodslist {
    width: 943px;
    height: 450px;
    // background-color: rgb(244, 242, 242);
    align-items: center;
    position: relative;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    .title {
      width: 100%;
      height: 24px;
      display: flex;
      border-bottom: 1px solid gray;
      user-select: none;
      .img {
        width: 190px;
        text-align: center;
      }
      .goodsinfo {
        width: 300px;
        text-align: center;
      }
      .goodsclass {
        width: 150px;
        text-align: center;
      }
      .goodsquantity {
        width: 150px;
        text-align: center;
      }
      .goodsprice {
        width: 150px;
        text-align: center;
      }
    }
    .list {
      width: 943px;
      height: 140px;
      display: flex;
      border-bottom: 1px solid gray;
      box-sizing: border-box;
      margin-bottom: 3px;
      .imgs {
        width: 190px;
        height: 140px;
        user-select: none;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .info {
        width: 300px;
        height: 140px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 1px solid gray;
        .infomsg {
          width: 300px;
          height: 30px;
          z-index: 9;
        }
      }
      .class,
      .quantity,
      .price {
        width: 150px;
        height: 140px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 1px solid gray;
      }
      .classmsg,
      .quantitymsg,
      .pricemsg {
        width: 130px;
        text-align: center;
      }
      .updata {
        width: 35px;
        height: 35px;
        position: absolute;
        transform: translateY(50px);
        right: -45px;
        user-select: none;
        .icon {
          // width:35px;
          width: 100%;
          height: 100%;
        }
      }
      .updata:hover {
        cursor: pointer;
      }
      .updatamsg {
        width: 100%;
        height: 140px;
        position: absolute;
        background-color: teal;
      }
    }
  }
  .page {
    width: 80%;
    height: 50px;
    // background-color: tan;
    position: relative;
    left: 50%;
    transform: translate(-50%, 55px);
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    .pagemenu {
      width: 530px;
      height: 100%;
      display: flex;
      // justify-content: space-around;
      align-items: center;
      .pagelist {
        width: 39px;
        height: 39px;
        background-color: palegoldenrod;
        user-select: none;
        text-align: center;
        margin: 0 21px 0 21px;
        line-height: 35px;
        cursor: pointer;
      }
      .pagelist1 {
        background-color: teal;
        user-select: none;
        cursor: pointer;
      }
      .upper,
      .lower {
        width: 39px;
        height: 39px;
        background-color: aqua;
        user-select: none;
        margin: 0 9px 0 9px;
        line-height: 35px;
        text-align: center;
        cursor: pointer;
      }
    }
  }
  .updatamsg {
    width: 930px;
    height: 500px;
    position: relative;
    float: left;
    z-index: 9;
    top: -450px;
    right: -150px;
    background-color: rgba(235, 235, 235, 0.9);
    display: flex;
    align-items: center;
    .imglist {
      width: 210px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 210px;
        height: 150px;
        // margin-top: 90px;
      }
      label {
        width: 70px;
        height: 30px;
        background-color: rgba(250, 164, 4);
        border-radius: 3px;
        text-align: center;
        line-height: 190%;
        font-size: 15px;
        margin: 15px 0 49px 0;
        user-select: none;
      }
      label:hover {
        cursor: pointer;
      }
    }
    .infolist {
      width: 330px;
      height: 210px;
      // background-color: teal;
      display: flex;
      flex-wrap: wrap;
      margin-left: 5px;
      .msg,
      .notes {
        width: 315px;
        height: 50px;
        display: flex;
        align-items: center;
        .title,
        .Subheading {
          width: 50px;
          text-align: justify;
          text-justify: distribute-all-lines;
          text-align-last: justify;
        }
      }
      input {
        width: 255px;
        height: 33px;
        outline: none;
        border: none;
        background-color: palegoldenrod;
        border-bottom: 1px solid gray;
        font-size: 19px;
        margin-left: 5px;
      }
    }
  }
}
</style>