<script setup>
import CanvasPdf from '@/components/CanvasPdf.vue';
import {Uint8ArrayToString} from "@/components/myUtils.js"
import {UploadQuestionPDF} from "@/axios/requestThink.js"
import { ref, onMounted, watch } from 'vue';

const question=ref({ 
id:'',
pdfString:''
})
const srcPdf=ref('');
const handleUpload = (file) => {
  const reader = new FileReader(); // 确保 reader 在 handleUpload 内部定义
  reader.readAsArrayBuffer(file.raw); // 使用 FileReader 读取文件

  // 当读取完毕时，触发 onload 事件
  reader.onload = (event) => {
    const data = new Uint8Array(event.target.result); // 将读取的结果转换为 Uint8Array
    srcPdf.value = data; // 将文件内容保存到 srcPdf
    question.value.pdfString = Uint8ArrayToString(data); // 将文件内容转换为字符串
  };

  // 如果需要处理错误，可以加上 onerror
  reader.onerror = (error) => {
    console.error('FileReader error: ', error);
    ElMessage.error('文件读取失败');
  };
};

const handleUpdate=()=>{
UploadQuestionPDF(question.value).then(res=>{
ElMessage(res.msg); 
}).catch((res)=>{
ElMessage('更新异常') ;
})
}
</script>
<template>
    <div class="page-container">
        <div class="title-container">
            <span>無铭</span>
        </div>
        <div class="toolbar-container">
            <div class="toolbar-left">
                <el-form :inline="true">
                    <el-form-item>
                        <el-upload action="/" :auto-upload="false" :show-file-list="false" :on-change="handleUpload">
                            <template #trigger><el-button>导入</el-button></template>
                        </el-upload>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="question.id" placeholder="题号"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="handleUpdate">更新</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="toolbar-right"></div>
        </div>
        <div class="content-container">
            <CanvasPdf :src="srcPdf"/>
        </div> 

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