<script setup>
import {ref} from 'vue'
const count = ref(0)
function add(){
    count.value++
}
</script>
<template>
    <button type="button" class="button" @click="add">
        计数是夺少 :{{ count }}
    </button>
</template>
<style scoped>
.button{
    color:brown;
    background-color: aqua;
    }
</style>