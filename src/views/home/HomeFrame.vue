<script setup>
import LayoutMenu from './LayoutMenu.vue'
import {useRouter} from 'vue-router'
const Router = useRouter()
const handle=()=>{
    Router.push({name:'HardHome'})
}
</script>
<template>
    <div class="page">
        <header>
            我来组成头部
            <el-button @click="handle">nihao</el-button>
        </header>
        <main>
            <div class="navigation">
                <LayoutMenu></LayoutMenu>
            </div>
            <div class="content">
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>
<style>
.page{
    height:100%;
    display:flex;
    overflow:hidden;
    flex-direction: column;
    >header{
        justify-content: center;
        height: 60px;
        background-color: red;
    }
    >main{
        flex:1;
        overflow: auto;
        display:flex;
        flex-direction:row;
        margin-top:10px;
        >.navigation{
            height:100%;
            overflow: hidden;
            background-color: yellow ; 
        }
        >.content{
            flex:1;
            background-color: aqua;
            margin-left:10px;
            overflow: scroll;
        }
    }
}
</style>