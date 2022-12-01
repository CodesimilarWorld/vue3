import { createStore } from 'vuex'
// import { $get, $POST } from '../Api/login'
import { useRouter } from 'vue-router'
import { findDir } from '@vue/compiler-core'

const $router = useRouter()

const Store = createStore({
    state() {
        return {
            statis: [],
            infolist: [
                { img: 'https://img1.baidu.com/it/u=929806338,1390651049&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889', infomsg: 'info', classmsg: 'goods', quantitymsg: '13', pricemsg: '99', show: false },
                { img: 'https://img1.baidu.com/it/u=2924756034,2009572454&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281', infomsg: 'info', classmsg: 'goods', quantitymsg: '57', pricemsg: '73', show: false },
                { img: 'https://img2.baidu.com/it/u=303957398,946954955&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500', infomsg: 'info', classmsg: 'goods', quantitymsg: '39', pricemsg: '81', show: false },
                { img: 'https://img2.baidu.com/it/u=523602998,3329967730&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=333', infomsg: 'info', classmsg: 'goods', quantitymsg: '73', pricemsg: '57', show: false },
                { img: 'https://img1.baidu.com/it/u=2140015946,2218584265&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=786', infomsg: 'info', classmsg: 'goods', quantitymsg: '53', pricemsg: '75', show: false },
                { img: 'https://img1.baidu.com/it/u=929806338,1390651049&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889', infomsg: 'info', classmsg: 'goods', quantitymsg: '13', pricemsg: '99', show: false },
                { img: 'https://img1.baidu.com/it/u=2924756034,2009572454&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281', infomsg: 'info', classmsg: 'goods', quantitymsg: '57', pricemsg: '73', show: false },
                { img: 'https://img2.baidu.com/it/u=303957398,946954955&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500', infomsg: 'info', classmsg: 'goods', quantitymsg: '39', pricemsg: '81', show: false },
                { img: 'https://img2.baidu.com/it/u=523602998,3329967730&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=333', infomsg: 'info', classmsg: 'goods', quantitymsg: '73', pricemsg: '57', show: false },
                { img: 'https://img1.baidu.com/it/u=2140015946,2218584265&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=786', infomsg: 'info', classmsg: 'goods', quantitymsg: '53', pricemsg: '75', show: false },
                { img: 'https://img1.baidu.com/it/u=929806338,1390651049&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889', infomsg: 'info', classmsg: 'goods', quantitymsg: '13', pricemsg: '99', show: false },
                { img: 'https://img1.baidu.com/it/u=2924756034,2009572454&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281', infomsg: 'info', classmsg: 'goods', quantitymsg: '57', pricemsg: '73', show: false },
                { img: 'https://img2.baidu.com/it/u=303957398,946954955&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500', infomsg: 'info', classmsg: 'goods', quantitymsg: '39', pricemsg: '81', show: false },
                { img: 'https://img2.baidu.com/it/u=523602998,3329967730&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=333', infomsg: 'info', classmsg: 'goods', quantitymsg: '73', pricemsg: '57', show: false },
                { img: 'https://img1.baidu.com/it/u=2140015946,2218584265&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=786', infomsg: 'info', classmsg: 'goods', quantitymsg: '53', pricemsg: '75', show: false },
                { img: 'https://img1.baidu.com/it/u=929806338,1390651049&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889', infomsg: 'info', classmsg: 'goods', quantitymsg: '13', pricemsg: '99', show: false },
                { img: 'https://img1.baidu.com/it/u=2924756034,2009572454&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281', infomsg: 'info', classmsg: 'goods', quantitymsg: '57', pricemsg: '73', show: false },
                { img: 'https://img2.baidu.com/it/u=303957398,946954955&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500', infomsg: 'info', classmsg: 'goods', quantitymsg: '39', pricemsg: '81', show: false },
                { img: 'https://img2.baidu.com/it/u=523602998,3329967730&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=333', infomsg: 'info', classmsg: 'goods', quantitymsg: '73', pricemsg: '57', show: false },
                { img: 'https://img1.baidu.com/it/u=2140015946,2218584265&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=786', infomsg: 'info', classmsg: 'goods', quantitymsg: '53', pricemsg: '75', show: false },
                { img: 'https://img1.baidu.com/it/u=929806338,1390651049&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889', infomsg: 'info', classmsg: 'goods', quantitymsg: '13', pricemsg: '99', show: false },
                { img: 'https://img1.baidu.com/it/u=2924756034,2009572454&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281', infomsg: 'info', classmsg: 'goods', quantitymsg: '57', pricemsg: '73', show: false },
                { img: 'https://img2.baidu.com/it/u=303957398,946954955&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500', infomsg: 'info', classmsg: 'goods', quantitymsg: '39', pricemsg: '81', show: false },
                { img: 'https://img2.baidu.com/it/u=523602998,3329967730&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=333', infomsg: 'info', classmsg: 'goods', quantitymsg: '73', pricemsg: '57', show: false },
                { img: 'https://img1.baidu.com/it/u=2140015946,2218584265&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=786', infomsg: 'info', classmsg: 'goods', quantitymsg: '53', pricemsg: '75', show: false },
                { img: 'https://img1.baidu.com/it/u=929806338,1390651049&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889', infomsg: 'info', classmsg: 'goods', quantitymsg: '13', pricemsg: '99', show: false },
                { img: 'https://img1.baidu.com/it/u=2924756034,2009572454&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281', infomsg: 'info', classmsg: 'goods', quantitymsg: '57', pricemsg: '73', show: false },
                { img: 'https://img2.baidu.com/it/u=303957398,946954955&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500', infomsg: 'info', classmsg: 'goods', quantitymsg: '39', pricemsg: '81', show: false },
                { img: 'https://img2.baidu.com/it/u=523602998,3329967730&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=333', infomsg: 'info', classmsg: 'goods', quantitymsg: '73', pricemsg: '57', show: false },
                { img: 'https://img1.baidu.com/it/u=2140015946,2218584265&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=786', infomsg: 'info', classmsg: 'goods', quantitymsg: '53', pricemsg: '75', show: false },
                { img: 'https://img1.baidu.com/it/u=929806338,1390651049&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889', infomsg: 'info', classmsg: 'goods', quantitymsg: '13', pricemsg: '99', show: false },
                { img: 'https://img1.baidu.com/it/u=2924756034,2009572454&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281', infomsg: 'info', classmsg: 'goods', quantitymsg: '57', pricemsg: '73', show: false },
                { img: 'https://img2.baidu.com/it/u=303957398,946954955&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500', infomsg: 'info', classmsg: 'goods', quantitymsg: '39', pricemsg: '81', show: false },
                { img: 'https://img2.baidu.com/it/u=523602998,3329967730&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=333', infomsg: 'info', classmsg: 'goods', quantitymsg: '73', pricemsg: '57', show: false },
                { img: 'https://img1.baidu.com/it/u=2140015946,2218584265&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=786', infomsg: 'info', classmsg: 'goods', quantitymsg: '53', pricemsg: '75', show: false },
                { img: 'https://img1.baidu.com/it/u=929806338,1390651049&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889', infomsg: 'info', classmsg: 'goods', quantitymsg: '13', pricemsg: '99', show: false },
                { img: 'https://img1.baidu.com/it/u=2924756034,2009572454&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281', infomsg: 'info', classmsg: 'goods', quantitymsg: '57', pricemsg: '73', show: false },
                { img: 'https://img2.baidu.com/it/u=303957398,946954955&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500', infomsg: 'info', classmsg: 'goods', quantitymsg: '39', pricemsg: '81', show: false },
                { img: 'https://img2.baidu.com/it/u=523602998,3329967730&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=333', infomsg: 'info', classmsg: 'goods', quantitymsg: '73', pricemsg: '57', show: false },
                { img: 'https://img1.baidu.com/it/u=2140015946,2218584265&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=786', infomsg: 'info', classmsg: 'goods', quantitymsg: '53', pricemsg: '75', show: false },
                { img: 'https://img1.baidu.com/it/u=929806338,1390651049&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889', infomsg: 'info', classmsg: 'goods', quantitymsg: '13', pricemsg: '99', show: false },
                { img: 'https://img1.baidu.com/it/u=2924756034,2009572454&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281', infomsg: 'info', classmsg: 'goods', quantitymsg: '57', pricemsg: '73', show: false },
                { img: 'https://img2.baidu.com/it/u=303957398,946954955&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500', infomsg: 'info', classmsg: 'goods', quantitymsg: '39', pricemsg: '81', show: false },
                { img: 'https://img2.baidu.com/it/u=523602998,3329967730&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=333', infomsg: 'info', classmsg: 'goods', quantitymsg: '73', pricemsg: '57', show: false },
                { img: 'https://img1.baidu.com/it/u=2140015946,2218584265&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=786', infomsg: 'info', classmsg: 'goods', quantitymsg: '53', pricemsg: '75', show: false },
                { img: 'https://img1.baidu.com/it/u=929806338,1390651049&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889', infomsg: 'info', classmsg: 'goods', quantitymsg: '13', pricemsg: '99', show: false },
                { img: 'https://img1.baidu.com/it/u=2924756034,2009572454&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281', infomsg: 'info', classmsg: 'goods', quantitymsg: '57', pricemsg: '73', show: false },
                { img: 'https://img2.baidu.com/it/u=303957398,946954955&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500', infomsg: 'info', classmsg: 'goods', quantitymsg: '39', pricemsg: '81', show: false },
                { img: 'https://img2.baidu.com/it/u=523602998,3329967730&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=333', infomsg: 'info', classmsg: 'goods', quantitymsg: '73', pricemsg: '57', show: false },
                { img: 'https://img1.baidu.com/it/u=2140015946,2218584265&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=786', infomsg: 'info', classmsg: 'goods', quantitymsg: '53', pricemsg: '75', show: false },
                { img: 'https://img1.baidu.com/it/u=929806338,1390651049&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889', infomsg: 'info', classmsg: 'goods', quantitymsg: '13', pricemsg: '99', show: false },
                { img: 'https://img1.baidu.com/it/u=2924756034,2009572454&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281', infomsg: 'info', classmsg: 'goods', quantitymsg: '57', pricemsg: '73', show: false },
                { img: 'https://img2.baidu.com/it/u=303957398,946954955&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500', infomsg: 'info', classmsg: 'goods', quantitymsg: '39', pricemsg: '81', show: false },
                { img: 'https://img2.baidu.com/it/u=523602998,3329967730&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=333', infomsg: 'info', classmsg: 'goods', quantitymsg: '73', pricemsg: '57', show: false },
                { img: 'https://img1.baidu.com/it/u=2140015946,2218584265&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=786', infomsg: 'info', classmsg: 'goods', quantitymsg: '53', pricemsg: '75', show: false },
                { img: 'https://img1.baidu.com/it/u=929806338,1390651049&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889', infomsg: 'info', classmsg: 'goods', quantitymsg: '13', pricemsg: '99', show: false },
                { img: 'https://img1.baidu.com/it/u=2924756034,2009572454&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281', infomsg: 'info', classmsg: 'goods', quantitymsg: '57', pricemsg: '73', show: false },
                { img: 'https://img2.baidu.com/it/u=303957398,946954955&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500', infomsg: 'info', classmsg: 'goods', quantitymsg: '39', pricemsg: '81', show: false },
                // { img: 'https://img2.baidu.com/it/u=523602998,3329967730&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=333', infomsg: 'info', classmsg: 'goods', quantitymsg: '73', pricemsg: '57', show: false },
                // { img: 'https://img1.baidu.com/it/u=2140015946,2218584265&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=786', infomsg: 'info', classmsg: 'goods', quantitymsg: '53', pricemsg: '75', show: false },
                // { img: 'https://img1.baidu.com/it/u=929806338,1390651049&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889', infomsg: 'info', classmsg: 'goods', quantitymsg: '13', pricemsg: '99', show: false },
                // { img: 'https://img1.baidu.com/it/u=2924756034,2009572454&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281', infomsg: 'info', classmsg: 'goods', quantitymsg: '57', pricemsg: '73', show: false },
                // { img: 'https://img2.baidu.com/it/u=303957398,946954955&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500', infomsg: 'info', classmsg: 'goods', quantitymsg: '39', pricemsg: '81', show: false },
                // { img: 'https://img2.baidu.com/it/u=523602998,3329967730&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=333', infomsg: 'info', classmsg: 'goods', quantitymsg: '73', pricemsg: '57', show: false },
                // { img: 'https://img1.baidu.com/it/u=2140015946,2218584265&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=786', infomsg: 'info', classmsg: 'goods', quantitymsg: '53', pricemsg: '75', show: false },
                // { img: 'https://img1.baidu.com/it/u=929806338,1390651049&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889', infomsg: 'info', classmsg: 'goods', quantitymsg: '13', pricemsg: '99', show: false },
                // { img: 'https://img1.baidu.com/it/u=2924756034,2009572454&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281', infomsg: 'info', classmsg: 'goods', quantitymsg: '57', pricemsg: '73', show: false },
                // { img: 'https://img2.baidu.com/it/u=303957398,946954955&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500', infomsg: 'info', classmsg: 'goods', quantitymsg: '39', pricemsg: '81', show: false },
                // { img: 'https://img2.baidu.com/it/u=523602998,3329967730&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=333', infomsg: 'info', classmsg: 'goods', quantitymsg: '73', pricemsg: '57', show: false },
                // { img: 'https://img1.baidu.com/it/u=2140015946,2218584265&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=786', infomsg: 'info', classmsg: 'goods', quantitymsg: '53', pricemsg: '75', show: false },
                // { img: 'https://img1.baidu.com/it/u=929806338,1390651049&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889', infomsg: 'info', classmsg: 'goods', quantitymsg: '13', pricemsg: '99', show: false },
                // { img: 'https://img1.baidu.com/it/u=2924756034,2009572454&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281', infomsg: 'info', classmsg: 'goods', quantitymsg: '57', pricemsg: '73', show: false },
                // { img: 'https://img2.baidu.com/it/u=303957398,946954955&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500', infomsg: 'info', classmsg: 'goods', quantitymsg: '39', pricemsg: '81', show: false },
                // { img: 'https://img2.baidu.com/it/u=523602998,3329967730&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=333', infomsg: 'info', classmsg: 'goods', quantitymsg: '73', pricemsg: '57', show: false },
            ],
            infopage: [

            ],
            pagelist: [

            ],
            pagenum: [

            ],

            pagelength:[

            ],

            num:0
        }
    },

    getters: {
        // pagelength(state){
        //     for(let i=0; i< Math.ceil(state.infolist.length / 3); i++){
        //         state.pagelist[i] = state.infolist.slice(i*3,3*(i+1))
        //     }
        //     return state.pagelist
        // },

        pagenum(state){
            return Math.ceil(state.infolist.length / 3)
        },

        num(state){
            return state.num
        }
    },

    actions: {
        // async Login({ commit,state }, value) {
        //     let data = await $POST('/apis/user/login', value)
        //     let stor = window.localStorage
        //     if (data.status == 201) {
        //         stor.setItem('token', data.data)
        //         console.log(stor.getItem('token'))
        //         state.statis = data.status
        //     }
        // }
    },

    mutations: {
        findfile(state, value) {
            if(value) state.infolist.splice(state.infolist.findIndex(item => item.pricemsg == value.pricemsg), 1)
            console.log(Math.floor(state.infolist.length/3),'info')
            state.num = Math.ceil(state.infolist.length/3)
            // state.pagelength = 
            // console.log(state.pagelength,'lengths')
        },

        page(state, value) {
            state.page = state.infolist.slice(3 * value, 3 * (value + 1))
        },

        pagelist(state){
            for(let i=0; i< Math.ceil(state.infolist.length / 3); i++){
                state.pagelist[i] = state.infolist.slice(3 * i, 3 * (i + 1))
            }
            console.log(state.pagelist,'list')
        },

        pagenum(state){
            for(let i=0; i< Math.ceil(state.pagelist.length / 5); i++){
                console.log(state.pagelist[i])
            }
        },

        // pageshow(state) {
        //     for (let i = 0; i < state.infolist.length; i++) {
        //         state.infolist[i].show = false
        //     }
        // },

        pagelist(state, value) {
            // if(value) state.infolist.splice(state.infolist.findIndex(item => item.id == value.id), 1)
            
        },

        remove(state){
            for(let i=0; i< Math.ceil(state.infolist.length / 3); i++){
                state.pagelist[i] = state.infolist.slice(i*3,3*(i+1))
            }
            console.log(state.pagelist)
        }
    }
})

export default Store