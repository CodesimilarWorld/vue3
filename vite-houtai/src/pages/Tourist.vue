<template>
  <div class="tourist">
    <div class="canvasbox"><canvas class="zdog-canvas" width="90" height="87"></canvas></div>
    <div class="canvasbox1"><canvas class="zdog-canvas1" width="90" height="87"></canvas></div>
    <div class="skew"></div>
    <div :class="conten">
      <!-- <div class="list" v-for="(lis, index) in list" :key="index">
        <div
          :class="num == index + 1 ? 'listinfo1' : 'listinfo'"
          class="listinfo"
          @click="listbtn(index + 1)"
        >
          <img src="/public/saibo.jpg" alt="" />
          <div class="msg">{{ lis.msg }}</div>
          <div class="time">{{ lis.time }}</div>
        </div>
      </div> -->
      <div class="list">
        <div class="listmsg" style="transform:translate(-35px,50px)">
          <div class="dv1" style="display:flex;transform:translateX(45px)"><span>A</span><span>d</span><span>v</span><span>a</span><span>n</span><span>c</span><span>e</span><span>d</span> <span>T</span><span>e</span><span>a</span><span>m</span></div>
          <p><i style="animation-delay:0.7s">With many years of experience</i></p>
          <p><i style="animation-delay:0.7s">in digital product</i></p>
          <p><i style="animation-delay:0.7s">development</i></p>
        </div>
        <div class="listmsg" style="transform:translate(15px,90px)">
          <div  class="dv1" style="display:flex;transform:translateX(50px)"><span>D</span><span>i</span><span>g</span><span>i</span><span>t</span><span>a</span><span>l</span><span>D</span><span>e</span><span>s</span><span>i</span><span>g</span><span>n</span></div>
          <p><i style="animation-delay:1.3s">we understand how to create</i></p>
          <p><i style="animation-delay:1.3s">user-friendly and memorable</i></p>
          <p><i style="animation-delay:1.3s">interfaces for the leading</i></p>
        </div>
        <div class="listmsg" style="transform:translate(99px,130px)">
          <div  class="dv1" style="display:flex;transform:translateX(19px)"><span>B</span><span>o</span><span>u</span><span>t</span><span>i</span><span>q</span><span>u</span><span>e</span><span> w</span><span>i</span><span>t</span><span>h</span><span> F</span><span>o</span><span>c</span><span>u</span><span>s</span></div>
          <p><i style="animation-delay:1.9s">world companies</i></p>
          <p><i style="animation-delay:1.9s">Properly and harmoniously</i></p>
          <p><i style="animation-delay:1.9s">we integrate modern</i></p>
        </div>
      </div>
    </div>
    <div :class="class1">
      <div :class="view" ref="echart"></div>
      <div :class="view1" ref="echart1"></div>
    </div>
    <div class="menu">
      <div class="timebox">
      <div class="movetime">10.29</div>
      </div>
      <div class="timebox1">
      <div class="movetime1" style="color:rgba(255,215,0)">10.29</div>
      </div>
      <div class="echar" @click="echar">echart</div>
      <div class="touris" @click="touris">back</div>
    </div>
    <div :class="merus">
      <div class="lists" style="top:135px;left:75px"></div>
      <div class="lists" style="top:515px;left:75px;"></div>
      <div class="lists" style="top:635px;left:410px;"></div>
      <div class="lists" style="top:335px;left:655px;"></div>
      <div class="lists" style="top:98px;left:550px;"></div>
    </div>
    <div class="background" :style="{backgroundColor:img}"></div>
    <div class="backgroundtext">move</div>
    <div class="box1">
    <div class="animate" v-for="(lis,index) in animate" :key="index">
      <div :class="lis.class" :style="{top:lis.top}">
        <h1>{{lis.title}}</h1>
        <p>{{lis.text}}</p>
        <p>{{lis.text1}}</p>
      </div>
  </div>
  </div>
    </div>
    
</template>

<script>
import { onMounted, reactive, ref } from "@vue/runtime-core";
// import { userFind } from "../Api/User";

export default {
  name: "Tourist",
  data() {
    return {
      num: 0,
      btns: 0,
      conten: "content",
      class1: "echart echart1",
      list: [
        { msg: "msg", time: "10.29" },
        { msg: "msg", time: "10.29" },
        { msg: "msg", time: "10.29" },
      ],
      i: 0,
      j: 0,
      merus: "meru",
      view:'view',
      view1:'view1',
      num1:0,
      animate: [
        {title:'',text:'',top:50+'px',num:0}
        // {title:'msg',text:'s',top:50+'px',num:0,class:'animatelist1'},
        // {title:'msg',text:'s',top:50+'px',num:0,class:'animatelist'},
        // {title:'msg',text:'s',top:50+'px',num:0,class:'animatelist1'},
        // {title:'msg',text:'s',top:50+'px',num:0,class:'animatelist1'}
      ],
      scrollwidth:0,
      bol:1,
      img:'teal'
    };
  },
  methods: {
    listbtn() {
      if (btns.value == 0) {
        this.num = nums;
        this.btns++;
        // alert(nums);
      }
    },
    echar() {
      this.conten = "content content1";
      this.class1 = "echart";
      let myChart = echarts.init(this.$refs.echart);
      let myChart1 = echarts.init(this.$refs.echart1);

      let option = {
        title: {
          text: "拖动",
          left: "left",
        },
        xAxis: {
          type: "category",
          data: ["1月", "2月", "3月", "4月", "5月"],
        },
        yAxis: {
          type: "value",
          data: [55, 59, 33, 73, 43],
          name: "总量",
        },
        tooltip: {},
        legend: {
          data: ["data"],
        },
        series: [
          {
            data: [
              { value: 55, name: "name" },
              { value: 59, name: "lis" },
              { value: 33, name: "age" },
              { value: 73, name: "msg" },
              { value: 43, name: "age" },
            ],
            type: "bar",
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" },
              ],
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }],
            },
            itemStyle: {
              color: "teal",
            },
            emphasis: {
              focus: "series",
            },
            label: "distance",
            // name: ['as','aqua','asa'],
            cursor: "pointer",
            select: "disabled",
          },
          {
            data: [
              { value: 50, name: "name" },
              { value: 19, name: "lis" },
              { value: 53, name: "age" },
              { value: 73, name: "msg" },
              { value: 43, name: "age" },
            ],
            type: "bar",
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" },
              ],
            },
            // markLine: {
            //   data: [{ type: "average", name: "平均值" }],
            // },
            itemStyle: {
              color: "plum",
            },
            emphasis: {
              focus: "series",
            },
            label: "distance",
            // name: 'as',
            cursor: "pointer",
            select: "disabled",
            legend: {
              data: ["bar"],
            },
            toolabox: {
              show: true,
              feature: {
                dataZoom: {
                  yAxisIndex: "none",
                },
                dataView: { readOnly: false },
                magicType: { type: ["line", "bar"] },
                restore: {},
                saveAsImage: {},
              },
            },
            grid: {
              left: 35,
              right: 0,
              top: 35,
            },
          },
        ],
      };

      setTimeout(() => {
        myChart1.setOption({
          title: {
            text: "Echarts",
          },
          // dataZoom:{

          // },
          tooltip: {},
          xAxis: {
            data: ["衣服", "直播", "游戏", "电影"],
          },
          yAxis: [
            {
              axisLine: {
                show: true,
              },
              axisTick: {
                show: true,
              },
            },
          ],
          series: [
            {
              name: "bar",
              type: "bar",
              data: [10, 20, 30, 40],
            },
            {
              name: "line",
              type: "line",
              data: [10, 20, 30, 40],
            },
            {
              type: "scatter",
              data: [
                [10, 20],
                [15, 30],
                [30, 40],
                [40, 50],
              ],
            },
          ],
          legend: {
            data: ["bar", "line"],
          },
          toolbox: {
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: "none",
              },
              dataView: { readOnly: false },
              magicType: { type: ["line", "bar"] },
              restore: {},
              saveAsImage: {},
            },
          },
          grid: {
            left: 30,
            right: 0,
            top: 30,
          },
        });
      }, 500);
      myChart.setOption(option);
    },
    touris() {
      this.conten = "content";
      this.class1 = "echart echart1";
    },
    handleScroll(event) {
      var a = document.querySelector(".tourist");
      var meru = document.querySelector(".movetime");
      var meru1 = document.querySelector(".movetime1");
      var animate = document.querySelector(".animate")
      var scrollnum = 70
      var scrollWidth = 700
      
      if (event.wheelDelta == -120) {
        // if (this.j > 700) {
        //   this.merus = "meru meru1";
        // }
        // if(this.j>=window.innerWidth) {
        //   this.j=window.innerWidth-1
        //   return
        // }
        this.j += 50;
        a.scrollLeft = this.j;
        this.num1 +=50
        if(this.j>3500) return
        
        if(this.j>scrollWidth +(this.bol*105)){
          
          this.scrollwidth +=10
          if(this.scrollwidth==scrollnum*this.bol){
            this.bol ++
            let list = {title:'on Aesthetics',text:'technologies into the classicala',text1:'graphic design aesthetics',top:Math.random()*50+'px',num:0,class:'animatelist'}
            let list1 = {title:'UX Strategy',text:'UI design',text1:'Development',top:Math.random()*50+'px',num:0,class:'animatelist1'}
            if(this.bol%2==0){
              this.animate.push(list)
            }else{
              this.animate.push(list1)
            }
          }
        }
      } else {
        if (this.j < 1) {
          this.j = 0;
          return;
        }
        a.scrollLeft = this.j;
        this.j -= 50;
        if(this.num1<100) return
        this.num1 -=50
        console.log(this.j);
      }
      meru.style.cssText = `transform:translateX(${this.num1 / 5-15}px)`;
      meru1.style.cssText = `transform:translateX(${(this.num1 / 5-15)-214}px)`;
    },
  },
  mounted() {
    window.addEventListener("mousewheel", this.handleScroll);
    var view = document.querySelector('.view')
    var view1 = document.querySelector('.view1')
    view.onmousedown = ()=>{
      window.onmousemove = (e)=>{
        var event = e||window.event
        view.style.cssText = `z-index:15;left:${event.clientX-150}px;top:${event.clientY-500}px;cursor:pointer`
      }
    }
    var num = 0
    view.onmouseup = (event)=>{
      if(event.clientX<500&&event.clientY<350){
        view.style.cssText = `top:-330px;left:35px;z-index:1`
        view1.style.cssText = `left:35px;top:350px;`
        num=1
      } else {
        view1.style.cssText = `left:35px;top:15px;z-index:1`
        view.style.cssText = `left:35px;top:15px`
      }
      window.onmousemove = null
    }
    view1.onmousedown = ()=>{
      window.onmousemove = (e)=>{
        var event = e||window.event
        view1.style.cssText = `z-index:15;left:${event.clientX-150}px;top:${event.clientY-150}px;cursor:pointer`
      }
    }
    view1.onmouseup = (event)=>{

      if(event.clientX<500&&event.clientY<350){
        view1.style.cssText = `left:35px;top:15px;z-index:1`
        view.style.cssText = `left:35px;top:15px`
        num=0
      } else {
        view.style.cssText = `top:-330px;left:35px;z-index:1`
        view1.style.cssText = `left:35px;top:350px;`
      }
      window.onmousemove = null
    }

    //
    const illo = new Zdog.Illustration({
        element:'.zdog-canvas',
        // dragRotate:true
    })

    new Zdog.Shape({
        addTo:illo,
        translate:{x:0,y:-21.5},
        scale:0.27,
        path:[
            {x:0,y:-40},
            {x:40,y:40},
            {x:120,y:50},
            {x:60,y:115},
            {x:75,y:190},
            {x:0,y:150},
            {x:-75,y:190},
            {x:-60,y:115},
            {x:-120,y:50},
            {x:-40,y:40}
        ],
        stroke:21,
        fill:true,
        color:'teal'
    })

    const illo1 = new Zdog.Illustration({
        element:'.zdog-canvas1',
        // dragRotate:true
    })
    new Zdog.Shape({
        addTo:illo1,
        translate:{x:0,y:-21.5},
        scale:0.27,
        path:[
            {x:0,y:-40},
            {x:40,y:40},
            {x:120,y:50},
            {x:60,y:115},
            {x:75,y:190},
            {x:0,y:150},
            {x:-75,y:190},
            {x:-60,y:115},
            {x:-120,y:50},
            {x:-40,y:40}
        ],
        stroke:21,
        fill:true,
        color:'rgba(255,203,0)'
    })

    var scrol = 0
    var left = 0
    var i = 3
    
    window.addEventListener('mousewheel',(event)=>{
      if(event.wheelDelta==-120){
        if(scrol>9) return
        scrol++
        if(scrol==i){
          i+=3
        left+=70
        gsap.to('.zdog-canvas',{
          x:left-15,
          rotateZ:left,
          duration:1,
          ease:'power1.inOut'
        })
        gsap.to('.zdog-canvas1',{
          x:left-205,
          rotateZ:left,
          duration:1,
          ease:'power1.inOut'
        })
        }
          // illo.rotate.z = 45
      } else {
        if(scrol<1) return
        scrol--
        if(scrol+1==i-3){
          i-=3
          left-=70
          gsap.to('.zdog-canvas',{
          x:left-15,
          rotateZ:left,
          duration:1,
          ease:'power1.inOut'
        })
        gsap.to('.zdog-canvas1',{
          x:left-205,
          rotateZ:left,
          duration:1,
          ease:'power1.inOut'
        })
        }
        
      }
  })
    var x = 0
    var x1 = 0
    var n = 0
    var circle = document.querySelector('.meru')
    circle.onmousedown = ()=>{
    circle.onmousemove = (event)=>{
      x1=event.movementX
      if(x1>9) x1=9
      if(x1<-9) x1=-9
      x+=x1/10
      console.log(x,'x')
      circle.style.cssText = `transform:rotateZ(${(n*45)+(-x)}deg)`
    }
    }
    var rotate = 1
    circle.onmouseup = (event)=>{
      circle.onmousemove =null
      if(x<9&&x>=1.5){
        n--
        console.log(n)
        circle.style.cssText = `transform:rotateZ(${n*45}deg)`
        // alert(n)
        if(rotate==1){
          rotate=6
        }
        rotate--
        x=0
      } else if(x>-9&&x<-1.5){
        n++
        console.log(n)
        circle.style.cssText = `transform:rotateZ(${n*45}deg)`
        // alert(n)
        if(rotate>4){
          rotate=0
        }
        rotate++
        x=0
      } else {
        circle.style.cssText = `transform:rotateZ(${n*45}deg)`
        x=0
      }
      switch(rotate){
        case 1:
          this.img = 'teal'
          return
        case 2:
          this.img = 'aqua'
          return
        case 3:
          this.img = 'plum'
          return
        case 4:
          this.img = 'palegoldenrod'
          return
        case 5:
          this.img = 'peru'
          return
      }
    }

    const tl1 = gsap.timeline()
    tl1.staggerFromTo('span',.5,{
      ease:Back.easeOut.config(1.7),
      opacity:0,
      rotation:180,
      y:-100,
    },{
      ease:Back.easeOut.config(1.7),
      opacity:1,
      rotation:360,
      y:0,
    },.05)

    function animate(){
        // illo.rotate.z += 0.03
        // illo.rotate.y += 0.03
        // illo.translate.x = ((45*scrol)/10)
        illo.updateRenderGraph()
        illo1.updateRenderGraph()
        requestAnimationFrame(animate)
    }
    animate()

    const tourist = document.querySelector('.tourist')

    tourist.getBoundingClientRect

      const animatelist = document.querySelectorAll('.animatelist')

      const options = {
        root:tourist,
        threshold:1,
        rootMargin:'50px'
      }

      function lazyload(target){
        
        const io = new IntersectionObserver((entries,observer)=>{
          entries.forEach(entry=>{
            if(entry.isIntersecting){
              const list = entry.target
              animatelist.innerHTML = 'load'
            }
          })
        })
      }
    
  },
};
</script>

<style lang="less" scoped>
// span{
//   position:absolute;
// }
.box{
  width:100px;
  height:100px;
  position:absolute;
  left:0px;
  top:0px;
  background-color: aqua;
  transition:0.3s linear;
}
.canvasbox{
  width:190px;
  height:98px;
  position:absolute;
  left:1250px;
  top:675px;
  // background-color: aqua;
  overflow: hidden;
  padding-left: 15px;
  transform: translateY(-5px);
}
.canvasbox1{
  width:150px;
  height:98px;
  position:absolute;
  left:1455px;
  top:675px;
  // background-color: plum;
  overflow: hidden;
  transform: translateY(-5px);
}
canvas{
  position:absolute;
  // transform: translateX(0px);
  // left:1250px;
  // top:675px;
  transition:0.3s linear;
  // background-color: teal;
}
.zdog-canvas{
  transform:translate(0,5px)
}
.zdog-canvas1{
  transform: translate(-210px,5px);
}

.tourist {
  // width: 1439px;
  // min-width: 1439px;
  min-height: 100vh;
  max-height: 100vh;
  // box-sizing: border-box;
  background-color: teal;
  // display: flex;
  // justify-content: center;
  // background-color: rgba(213, 219, 219, 0.3);
  display: flex;
  flex-wrap: wrap;
  // flex-direction:row;
  animation: tourist 0.5s both;
  transition: 0.3s;
  position: relative;
  top: 0px;
  left: 0px;
  overflow-y: hidden;
  .meru {
    position: relative;
    top: -770px;
    left:1780px;
    width: 700px;
    height: 700px;
    background-color: tan;
    // float:right;
    opacity: 1;
    transition: 1s;
    border-radius: 50%;
    // transform: rotateX(-25deg) rotateZ(15deg); // skewY(-7.5deg) rotateZ(6deg) ;
    .lists {
      width: 35px;
      height: 35px;
      background-color: rgb(191, 237, 237);
      position: absolute;
      // transform: rotateY(35deg);
      border-radius: 50%;
      color: rgb(144, 142, 142);
    }
    
  }
  .backgroundtext{
      // width:190px;
      // height:150px;
      position:absolute;
      top:450px;
      right:-720px;
      transition:0.3s linear;
      font-size: 25px;
      user-select: none;
      // z-index: -9;
    }
  .background{
      width:190px;
      height:150px;
      position:absolute;
      top:450px;
      right:-785px;
      transition:0.3s linear;
    }
  // .meru {
  //   top: -90px;
  //   opacity: 1;
  // }
  .content {
    width: 1150px;
    // height: 500px;
    // background-color: plum;
    display: block;
    // overflow: hidden;
    position: relative;
    // top: 50px;
    left: 90px;
    float:left;
    // background-color: rgba(217, 251, 251, 0.3);
    animation: conten 0.3s linear;
    transition: 0.3s;
    overflow: hidden;
    .list {
      width: 990px;
      height: 590px;
        // background-color: tan;
      float: left;
      margin: 21px 0 0 37px;
      position: relative;
      z-index: 9;
      display: flex;
      //   overflow: hidden;
      .listmsg{
        width:300px;
        height:190px;
        background-color: rgb(221, 226, 226);
        font-family: Helvetica;
        margin-right: 35px;
        // text-align: center;
        .dv1{
          height: 29px;
          font-size: 25.5px;
          overflow: hidden;
          font-family: monospace;
          font-weight: 750;
          // background-color:aqua ;
          span{
            position:relative;
            font-style:normal;
            justify-content: space-between;
            margin:0 1px 0 1px;
          }
        }
        p{
          height:24px;
          overflow:hidden;
          margin-left: 19px;
          i{
            position:relative;
            top:21px;
            font-style:normal;
            animation:i1 0.3s both;
            transition:0.3s;
          }
        }
        @keyframes i {
          100%{
            top:0px;
          }
        }
        @keyframes i1 {
          100%{
            top:0px;
          }
        }
      }
      // .listinfo {
      //   width: 285px;
      //   height: 175px;
      //   background-color: rgba(229, 215, 229, 0.9);
      //   position: relative;
      //   top: -255px;
      //   animation: list 0.7s both;
      //   animation-delay: 0.1s;
      //   display: flex;
      //   flex-wrap: wrap;
      //   padding: 15px;
      //   transition: 0.1s linear;
      //   img {
      //     width: 100%;
      //     height: 100%;
      //     position: absolute;
      //     top: 0;
      //     left: 0;
      //   }
      //   .msg {
      //     width: 100%;
      //     height: 100%;
      //     position: absolute;
      //     top: 0;
      //     left: 0;
      //     color: gray;
      //     background-color: rgba(229, 215, 229);
      //     transition: 0.3s linear;
      //     text-align: center;
      //     font-size: 21px;
      //   }
      //   .time {
      //     width: 300px;
      //     // background-color: aqua;
      //     text-align: left;
      //     align-self: flex-end;
      //     transform: translate(0px, -9px);
      //     font-size: 15px;
      //     color: rgb(146, 135, 6);
      //   }
      //   .btn {
      //     width: 35px;
      //     height: 24px;
      //     position: relative;
      //     z-index: 9;
      //   }
      // }
      // .listinfo:hover {
      //   background-color: rgb(223, 194, 223);
      //   .msg {
      //     mix-blend-mode: screen;
      //     color: white;
      //     background-color: rgb(34, 33, 33);
      //   }
      //   .time {
      //     color: aqua;
      //   }
      // }
      // .listinfo1 {
      //   width: 900px;
      //   height: 500px;
      //   position: absolute;
      //   z-index: 9;
      // }
    }
    @keyframes list {
      100% {
        top: 0px;
      }
    }
  }
  .content1 {
    opacity: 0;
  }
  @keyframes conten {
    100% {
      background-color: rgba(217, 251, 251, 0.3);
    }
  }
  
  .echart1 {
    opacity: 0;
    // animation:echart1 0.3s both;
    // animation-delay:1s;
  }
  // @keyframes echart1{
  //   100%{
  //     display: none;
  //   }
  // }
  .menu {
    width: 150px;
    height: 500px;
    // background-color: rgb(202, 225, 225);
    position: relative;
    top: 0px;
    // right: 50px;
    // float: right;
    border-radius: 9px;
    transition: 0.3s linear;
    // border: 1px solid rgb(191, 188, 188);
    // background-color: aqua;
    float:left;
    display: flex;
    flex-direction: column;
    .timebox{
      position:absolute;
      width:217px;
      height:98px;
      // background-color: teal;
      overflow: hidden;
      margin: 35px 0 0 115px;
    .movetime {
      width: 100%;
      height: 50px;
      text-align: center;
      font-size: 25px;
      font-weight: 550;
      color: white;
    }
    }
    .timebox1{
      position:absolute;
      width:217px;
      height:98px;
      // background-color: aqua;
      // left:-35px;
      left:215px;
      overflow: hidden;
      margin: 35px 0 0 115px;
      .movetime1{
        width: 100%;
      height: 50px;
      text-align: center;
      font-size: 25px;
      font-weight: 550;
      transform:translateX(-195px);
      color:rgba(255,243,0)
      }
    }
    .echar {
      width: 100%;
      height: 50px;
      color: rgb(96, 202, 202);
      font-size: 25;
      font-weight: 550;
      text-align: center;
      position:relative;
      transform: translate(155px,155px);
    }
    .touris {
      width: 100%;
      height: 50px;
      color:rgb(96, 202, 202);
      font-size: 25;
      font-weight: 550;
      text-align: center;
      position:relative;
      transform: translate(155px,198px);
    }
  }
}
@keyframes tourist {
  100% {
    background-color: rgb(221, 236, 236);
  }
}
.echart {
    width: 1050px;
    height: 750px;
    // background-color: teal;
    transition: 0.5s linear;
    // transition-delay: 0.3s;
    position: absolute;
    float: left;
    top: 0px;
    left: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: block;
    // transform: translateX(50px);
    transition: 0.3s linear;
    .view {
      width: 450px;
      height: 305px;
      background-color: rgb(206, 204, 203);
      // border: 1px solid gray;
      position: absolute;
      transition: 0.3s linear;
      left: 0px;
      top:0px;
      transform: translateY(350px);
      border-radius: 3px;
    }
    .view1 {
      width: 450px;
      height: 0px;
      // background-color: tan;
      // border: 1px solid gray;
      position: absolute;
      top: 15px;
      background-color: rgba(242, 242, 239, 0.9);
      padding: 5px;
      animation: view1s 0.3s both;
      transition: 0.3s linear;
      border-radius: 3px;
    }
  }
  @keyframes view1s {
    100% {
      height: 305px;
    }
  }
  .box1{
    display: flex;
    position:relative;
    top:-1180px;
    left:2550px;
  .animate{
    position:relative;
    // width:550px;
    // height:500px;
    // background-color: teal;
    // top:-550px;
    // right: -1300px;
    display: flex;
    // flex-wrap: nowrap;
    
    .animatelist{
      position:relative;
      width:240px;
      height:350px;
      background-color: rgb(209, 215, 215);
      transform: translateY(-240px);
      opacity: 0;
      animation:animationlist 0.5s ease-in-out both;
      margin-right: 150px;
      border-radius: 3px;
      h1{
        text-align: center;
      }
      p{
        text-align: left;
        margin-left: 15px;
      }
    }
    @keyframes animationlist {
      100%{
        transform: translateY(-30px);
        opacity: 1;
      }
    }
    .animatelist1{
      position:relative;
      width:240px;
      height:350px;
      background-color: rgb(209, 215, 215);
      transform: translateY(240px);
      opacity: 0;
      animation:animationlist1 0.7s ease-in-out both;
      margin-right: 150px;
      border-radius: 3px;
      h1{
        text-align: center;
      }
      p{
        text-align: left;
        margin-left: 15px;
      }
    }
    @keyframes animationlist1 {
      100%{
        transform: translateY(30px);
        opacity: 1;
      }
    }
  }
  }
</style>
