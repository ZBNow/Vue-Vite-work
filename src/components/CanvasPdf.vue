<script setup>
import * as PDF from 'pdfjs-dist'
import { ref, onMounted, watch } from 'vue';
import { nextTick } from 'vue';  // 需要从 Vue 导入 nextTick

PDF.GlobalWorkerOptions.workerSrc =import('pdfjs-dist/build/pdf.worker.entry');
const props=defineProps(['src']) //组件属性，接受 PDF 的数据源 src
let pdfDoc=null; //PDF 文档对象
const numPages=ref(0); //PDF 文档对象中页面数量
const myScale=ref(1); //页面对象的视口缩放比率

watch(
  () => props.src,
  (newValue) => {
    console.log('Received PDF source:', newValue); // 调试用，查看 src 的内容
    numPages.value = 0;
    pdfDoc = null;
    if (newValue === undefined || newValue === '' || newValue === null) return;
    PDF.getDocument(newValue).promise.then((pdf) => {
      pdfDoc = pdf;
      numPages.value = pdf.numPages;
      nextTick(() => {
        myRenderPage(1); // 从第一页开始渲染
      });
    }).catch((err) => {
      ElMessage.error('PDF 加载失败: ' + err); // 显示错误信息
    });
  },
  { immediate: true }
);

function myRenderPage(num){
    pdfDoc.getPage(num).then((page)=>{
    let vp = page.getViewport({scale: myScale.value });
    let viewport = page.getViewport({scale: window.innerWidth / vp.width});
    //物理窗口的大小
    let canvas = document.getElementById(`pdfCanvas${num}`);
    let content = canvas.getContext("2d"); 
    let dpr = window.devicePixelRatio || 1;
    let bsr = content.webkitBackingStorePixelRatio ||
    content.mozBackingStorePixelRatio ||
    content.msBackingStorePixelRatio ||
    content.oBackingStorePixelRatio ||
    content.backing5torePixelRatio ||1;
    let ratio = dpr / bsr;
    content.setTransform(ratio,0, 0,ratio,0, 0);
    canvas.width = viewport.width *ratio;
    canvas.height = viewport.height* ratio; 
    canvas.style.width =viewport.width+ "px";
    canvas.style.height =viewport.height + "px";
    let renderContext ={
    canvasContext: content,
    viewport: viewport
    };
    page.render(renderContext);
    if(num<numPages.value){
    myRenderPage(num+1); //递归渲染所有的页面对象
    }
    }) 
}
const zoomOut=()=>{ 
    if(myScale.value<1.5){
    myScale.value=myScale.value+0.1; 
    myRenderPage(1);
    }
}
const zoomIn=()=>{ 
    if(myScale.value>0.5){
    myScale.value=myScale.value-0.1
    myRenderPage(1);
    }
}
</script>
<template>
    <div class="pdf-container">
        <div class="pdf-toolbar">
            <div>
                <el-button style="width: 28px;" @click="zoomIn">+</el-button>
            </div>
            <div>
                <el-button style="width: 28px;" @click="zoomOut">-</el-button>
            </div>
        </div>
        <div class="pdf-content">
            <div class="pdf-canvas">
                <template v-for="num in numPages" :key="num" >
                    <canvas :id="`pdfCanvas${num}`"/>
                </template>
            </div>
        </div>
    </div>
</template>
<style scoped>
.pdf-container{
height: 100%;
display:flex;
flex-direction: row;
>.pdf-toolbar{
width: 35px;
background-color:whitesmoke;
display:flex;
flex-direction: column;
justify-content: center;
}
>.pdf-content{
flex: 1;
overflow: auto;
>.pdf-canvas{
display: flex;
flex-direction: column; 
align-items: center;
overflow: auto;
>canvas{ 
border:1px solid darkgray;
}
}
}
}
</style>