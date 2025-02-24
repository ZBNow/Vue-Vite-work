import {createRouter,createWebHistory} from 'vue-router'//createWebHistory为路由方法函数
import store from '../store/index.js'
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'
//获取路由器的实例
//描述路由对象的数组,每个元素对应一个路由对象
//定义homeFrame的子路由
const homeRoutes=[
    {
     path:"/train/think",
     component:()=>import("@/views/train/think/ThinkHome.vue"),
     name:"ThinkHome",
     meta: {requireAuth: true}
    },
    {
     path:"/train/hard",
     component:()=>import("@/views/train/hard/HardHome.vue"),
     name:"HardHome",
     meta: {requireAuth: true}
    },
    {
     path:"/train/soft",
     component:()=>import("@/views/train/soft/SoftHome.vue"),
     name:"SoftHome",
     meta: {requireAuth: true}
    },
    {
        path:"/test",
        component:()=>import("@/views/Test.vue"),
        name:"Test",
        meta: {requireAuth: true}
    }
]
//定义主路由
const routes=[
    {
    path:"/",
    component:()=>import("@/views/home/HomeFrame.vue"),
    name:"HomeFrame",
    meta: {requireAuth: true},
    children:homeRoutes//设置路由子数组，将路由数组里对应的组件渲染到HomeFrame的子区域大路由区域里为各主要组件
    //  将HomeFrame组件渲染到该区域 然后该路由区域里嵌套子路由区域
    },
    {
    path:"/login",
    component:()=>import("@/views/LoginView.vue"),
    name:"LoginView"
    },
    {
    path:"/register",
    component:()=>import("@/views/RegisterView.vue"),
    name:"RegisterView"
    },
    {
    path:"/404",
    component:()=>import("@/views/ErrorView.vue"),
    name:"ErrorView"
    }
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),//路由方法
    routes//路由数组
})
//创建全局前置守卫 判断是否进行跳转
router.beforeEach((to, from) => {
    //第一步：提取登录信息
    const isLogin=store.getters["User/isLogin"]; 
    //第二步：目标路由为登录页面
    if(to.path=="/login"){ //准备访问登录页面
        if(isLogin==true){ //已经登录(store中值不为空），重定向到系统首页
            return {name:'HomeFrame'}
        }
        return true;//没有登录，则放行，进入 to，即登录页面
    }
    //目标路由不是登录页面,分需要认证和不需要认证
    if(to.meta.requireAuth==true){ //目标路由要认证
        if(store.getters["User/isLogin"]==false){//没有认证信息，重定向到登录
            return {name:'LoginView'}
        }
        
    }
    return true; //目标路由不要认证，放行
});
export default router//传递到main.js