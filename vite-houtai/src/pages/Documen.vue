<template>
  <div class="conten">
    <div>documen</div>
    <button @click="btn">btn</button>
    <div class="msg">{{msg}}</div>
  </div>
</template>

<script>
import { GetDocumen } from "../Api/GetDocumen";

export default {
  name: "Documen",
  data(){
    return{
      msg:''
    }
  },
  methods: {
    async btn() {
      let name = this.$route.query;
      let msg = await GetDocumen(name);
      console.log(msg);
    },
  },
  async beforeCreate() {
    let name = this.$route.query;
    let msg = await GetDocumen(name);
    this.msg = msg.data
    console.log(msg);
  },
};
</script>

<style scoped>
.conten{
  width:100vw;
  height:100vh;
}
.msg{
  position:relative;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  text-align: center;
}
</style>