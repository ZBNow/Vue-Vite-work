<script setup lang="ts">
import { goBack } from './ThinkData';

</script>

<template>
    <div>
        <p style="font-size:50px">ComC</p>
        <el-button @click="goBack()">回到ComA</el-button>
    </div>
</template>
<style scoped>
div{
    display:flex;
    justify-content: center;
    align-items: center;
}
</style>