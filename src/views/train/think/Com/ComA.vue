<script setup>
import { changeCurrent } from './ThinkData';
</script>
<template>
    <div>
        <p style="font-size:50px">ComA</p>
        <el-button class="button" @click="changeCurrent('ComB')">跳转到ComB</el-button>
    </div>
</template>
<style scoped>
div{
    display:flex;
    justify-content: center;
    align-items: center;
    .button{
        margin-left:20px;
    }
}
</style>