<template>
<div class="container">
    <div class="box-absolute">绝对定位</div>
    <div class="box-relative">相对定位</div>
</div>
</template>
<style scoped>
.container {
             /* 设置父容器为相对定位 */
            width: 400px;
            height: 400px;
            background-color: lightblue;
            margin: 50px auto;
            border: 2px solid black;
        }

        /* 绝对定位的子元素 */
        .box-absolute {/*相对于父元素进行定位，并且脱离文档流，不占据空间*/
            position: absolute; /* 设置子元素为绝对定位 */
            top: 200px; /* 距离父容器顶部 50px */
            left: 100px; /* 距离父容器左侧 100px */
            width: 150px;
            height: 150px;
            background-color: coral;
        }

        /* 相对定位的子元素 */
        .box-relative {/*相对于该元素的原始位置进行定位，占据的空间为原始位置，没有脱离文档流
            position: relative; /* 设置子元素为相对定位 */
            top: 50px; /* 从原位置向下移动 50px */
            left: 100px; /* 从原位置向右移动 100px */
            width: 150px;
            height: 150px;
            background-color: lightgreen;
        }
</style>