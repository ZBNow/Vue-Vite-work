<script setup>
</script>
<template>
    <div class="page-container">
        <div class="title-container">
            <span>無铭</span>
        </div>
        <div class="toolbar-container">
            <div class="toolbar-left"></div>
            <div class="toolbar-right"></div>
        </div>
        <div class="content-container"></div> 

    </div>
</template>
<style scoped>
.page-container{
    overflow: hidden;
    height:100%;
    display:flex;
    flex-direction: column;
    >.title-container{
        height: 50px;
        font-size: 20px;
        font-weight: bold;
        background-color:antiquewhite;
        margin: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    > .toolbar-container{
        height: 50px;
        background-color:aliceblue;
        margin: 5px;
        display: flex;
        justify-content: space-between;
        >.toolbar-left{
            margin: 10px 145px 5px 30px;
        }
        >.toolbar-right{
            margin: 10px 145px 5px 30px;
        }
    }
    > .content-container{
        flex: 1;
        overflow: auto;
        margin: 5px;
        background-color: darkgray;
    }
}
</style>