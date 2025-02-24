<script setup>
import { current } from './Com/ThinkData.js';
</script>
<template>
    <KeepAlive>
        <component :is="current"></component>
    </KeepAlive>
</template>