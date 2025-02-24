<script setup>
import {ref} from 'vue'

import {useStore} from 'vuex'
const store = useStore()//使用store进行存储数据
import {useRouter} from 'vue-router'
const router = useRouter();//uesRouter获取当前Vue应用程序的Router实例
const form = ref({
    username: "無铭",
    password: "ailuguan"
})
const msg = ref('')
import {login} from '../axios/requestApp.js'
const handleLogin=()=>{
    login(form.value).then((res)=>{
        //如果服务器响应并且成功返回res对象执行该部分回调函数
        console.log('yes')
        if(res.data.code == 200){
            let payload = {
                token: res.data.data.token,
                username: res.data.data.username
            }
            store.commit('User/setToken',payload)//将服务器返回的token存储到store
            //跳转首页
            router.push({name:'HomeFrame'})
            console.log('nihao')
        }else if(res.data.code == -1){
            form.value.username = ''
            form.value.password = ''
            msg.value=`${res.data.msg},请重新输入！！！`
        }else{
            msg.value = '异常业务:${res.msg}'
        }
        console.log("服务器响应请求:成功")
        
    }).catch((err)=>{
        console.log("服务器响应请求:失败")
        console.log(err)
    })
    console.log("我先输出的")
}
const handleReset=()=>{
    msg.value='',
    form.value.username='',
    form.value.password='';
}
const handleRegister=()=>{

}

</script>
<template>
    <div class="login">
      <div class="vertical-text">
        一剑镇魂 一剑诸恶
      </div>
      <el-form :model="form" label-width="120px" label-position="top">
        <el-form-item label="手机号">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password" />
        </el-form-item>
        <el-form-item>
          <div class="twobutton">
            <el-button type="primary" @click="handleLogin">登入</el-button>
            <el-button>
              <router-link to="/register" class="zhuce">注册</router-link>
            </el-button>
            <el-button @click="handleReset">重置</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <style scoped>
  .vertical-text {
    writing-mode: vertical-rl; /* 竖排从右到左 */
    text-align: center;        /* 文字居中对齐 */
    font-size: 40px;           /* 字体大小 */
    font-family: 'SimSun';
    color: rgb(128, 120, 142);
           /* 将竖排文本稍微向左移动 */
    position: absolute;        /* 使用绝对定位来控制位置 */
    left: 550px;                /* 控制左侧位置，可以根据需要调整 */
  }
  
  .zhuce {
    text-decoration: none;
    color: inherit;
  }
  
  .login {
    background-color: rgb(255, 255, 255);
    height: 100vh;
    display: flex;
    justify-content: center;  /* 将整个内容水平居中 */
    align-items: center;      /* 将整个内容垂直居中 */
    position: relative;       /* 设置为相对定位，方便子元素使用绝对定位 */
  }
  
  .el-form {
    background-color: rgb(228, 228, 228);
    background-image: url('@/assets/永恩.jpg');
    background-position: -70px 0;
    background-size: cover;
    width: 300px;
    padding: 80px;
    border-radius: 10px;
  }
  
  .el-button {
    margin-top: 10px;
  }
  
  ::v-deep .el-form-item__label {
    color: black; /* 设置标签文字为黑色 */
  }
  </style>
  

