import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import("../pages/Login.vue")
const Documen = () => import('../pages/Documen.vue')
const Goods = () => import('../userinterface/Goods.vue')
const Publish = () => import('../userinterface/Publish.vue')
const User = () => import('../pages/User.vue')
const Usercentent = () => import('../pages/Usercentent.vue')
const Userlist = () => import('../userinterface/Userlist.vue')
const Echarts = () => import('../userinterface/Echarts.vue')
const Tourist = () => import('../pages/Tourist.vue')

const routes = [
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'user',
        path: '/user',
        component: User,
        children: [
            {
                path: '/user/usercentent',
                component: Usercentent
            },
            {
                path: '/user/goods',
                component: Goods
            },
            {
                path: '/user/publish',
                component: Publish
            },
            {
                path: '/user/userlist',
                component: Userlist
            },
            {
                path: '/user/echarts',
                component: Echarts
            }
        ],
    },
    {
        name: 'documen',
        path: '/documen',
        component: Documen
    },
    {
        name: 'tourist',
        path: '/tourist',
        component: Tourist
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    let stor = window.localStorage
    if (to.name !== 'login') {
        if (stor.token) {
            next()
        } else if(to.name == 'tourist'){
            next()
        } else {
            next('/login')
        }
    }

    next()
})

export default router