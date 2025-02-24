<script setup lang="ts">
import { changeCurrent } from './ThinkData';

</script>

<template>
    <div>
        <p style="font-size:50px">ComB</p>
        <el-button @click="changeCurrent('ComC')">跳转到ComC</el-button>
    </div>
</template>
<style scoped>
div{
    display:flex;
    justify-content: center;
    align-items: center;
    
}
</style>