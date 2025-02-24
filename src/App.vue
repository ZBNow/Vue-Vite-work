<script setup>
//<router-view></router-view>是Vue Router 提供的一个组件，用来在路由区域中进行占位标记
//它用来展示当前匹配到的路由组件，根据 URL 路径的变化来决定渲染哪个组件
</script>

<template>
  <router-view></router-view>
</template>

<style>
html,body{
  height: 100%;
  overflow: hidden;
}
#app{
  height:100%;
  overflow:hidden;
}
</style>
