<script setup>
import {ref,onMounted,computed} from 'vue';
import {ThinkQuestionInit, ThinkQuestionQuery} from "@/axios/requestThink.js";
import { changeCurrent } from './Com/ThinkData.js';
//定义三个响应式变量判断是否需要渲染组件
const hasModules=computed(()=>modules.value.length>0?true:false);
const hasChapters=computed(()=>chapters.value.length>0?true:false);
const hasTable=computed(()=>tableData.value.length>0?true:false);
const LMC=computed(()=>{ 
    if(form.value.chapter.length>0){
        return form.value.chapter;
    }else if(form.value.module.length>0){
        return form.value.module;
    }else if(form.value.level.length>0){
        return form.value.level;
    }else{ 
        return '';} 
})
const handleDelete=(row)=>{ }
const levels=ref([]);
const modules=ref([]);
const chapters=ref([]);
const form=ref({
    level:'',
    module:'',
    chapter:''
});
const tableData=ref([]);
const tableProp=ref([]);
onMounted(()=>{
    ThinkQuestionInit().then((res)=>{
        if(res.data.code == 200){
            console.log('组件重新渲染', res.data.data.options);
            levels.value=res.data.data.options;
        }
    }).catch((err)=>{})
})
const handleChangeLevel=(value)=>{
    modules.value=[];
    chapters.value=[];
    form.value.module='';
    form.value.chapter=''; 
    if(value===undefined || value.length<=0) { //选中值清空了
        form.value.level='';
        return; 
    } 
    for(let i=0;i< levels.value.length;i++){
        if(levels.value[i].value===value){
            if(levels.value[i].children!==undefined){
                modules.value=levels.value[i].children;
            }else{ 
                handleQuery();//执行“查询”单击的回调函数
            }
            break;
        }
    }
}
const handleChangeModule=(value)=>{
    form.value.chapter='';
    chapters.value=[];
    if(value===undefined || value.length<=0) {//选中值清空了。
        form.value.module='';
        return; 
    }
    for(let i=0;i< modules.value.length;i++){
        if(modules.value[i].value===value){
            if(modules.value[i].children!==undefined){
                chapters.value=modules.value[i].children;
            }else{
                handleQuery();//执行“查询”单击的回调函数
            }
            break;
        }
    }
}
const handleChangeChapter=(value)=>{
    if(value===undefined || value.length<=0) {//选中值清空了。
        form.value.chapter='';
    return; 
    }
    console.log(form.value.chapter)
    handleQuery();//执行“查询”单击的回调函数
}
const handleQuery=()=>{
    
    //if(form.value.chapter.length>0){
    //    LMC=form.value.chapter;
    //}else if(form.value.module.length>0){
    //    LMC=form.value.module;
    //}else if(form.value.level.length>0){
    //    LMC=form.value.level;
    //}
    ThinkQuestionQuery(LMC.value).then((res)=>{
        tableData.value=res.data.data.tableData;
        tableProp.value=res.data.data.tableProp;
        console.log(res)
    }).catch((res)=>{
    });
}
const handleJob=()=>{
    changeCurrent("ThinkJob");
}

const handleEdit=(row)=>{
    //如何将题目信息传递给组件 ThinkProgram.vue
    changeCurrent("ThinkProgram");
}

const JobProps=[
    {prop:'runid',label:'运行号'},
    {prop:'id',label:'题号'},
    {prop:'state',label:'状态'},
    {prop:'language',label:'语言'},
    {prop:'size',label:'代码长度(Bytes)'},
    {prop:'time',label:'提交时间'},
];
</script>
<template>
    <div class="page-container">
        <div class="title-container">
            <span>计算思维与能力实训</span>
        </div>
        <div class="toolbar-container">
            <div class="toolbar-left">
                <el-form :inline="true">
                    <el-form-item>
                    <el-select v-model="form.level" placeholder="等级" style="width: 200px;" @change="handleChangeLevel" >
                        <el-option v-for="it in levels" :key="it.value" :label="it.label" :value="it.value"/>
                    </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-show="hasModules" v-model="form.module" placeholder="模块" style="width: 200px;"@change="handleChangeModule" >
                            <el-option v-for="it in modules" :key="it.value" :label="it.label" :value="it.value"/>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-show="hasChapters" v-model="form.chapter" placeholder="章节" style="width: 200px;"@change="handleChangeChapter">
                            <el-option v-for="it in chapters" :key="it.value" :label="it.label" :value="it.value"/>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="handleQuery">查询</el-button>
                    </el-form-item>
                    <el-form-item>
                        <div class="toolbar-right">
                        <el-button @click="changeCurrent('ThinkJob')">我的提交</el-button>
                        </div>
                    </el-form-item>
                   
                </el-form>
            </div>
            
        </div>
        <div class="content-container">
            <el-table  v-show="hasTable" :data="tableData" stripe  border style="width: 100%">
                <el-table-column v-for="it in tableProp" :key="it.prop" :prop="it.prop" :label="it.label" width="150px" />
                <el-table-column fixed="right" label="操作" min-width="120">
                    <template #default="scope">
                        <el-button @click="handleEdit(scope.row)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
