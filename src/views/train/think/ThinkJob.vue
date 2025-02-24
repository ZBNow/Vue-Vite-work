<script setup>
import {ref,computed } from 'vue';
import {ThinkJobQueryPage,ThinkJobDelete} from "@/axios/requestThink.js"
import { changeCurrent } from './Com/ThinkData.js';
import { useStore } from 'vuex';
const store=useStore();
const page=ref({
    total:0, 
    pageSize:10,
    currentPage:1
})
const options=['所有','通过','未通过','编译错误','待提交'];
const form=ref({
    id:'',
    state:''
});
const tableData=ref([]);
const tableProp=ref([]);
const hasTable=computed(()=>tableData.value.length>0?true:false);
const handleReturn=()=>{ }
const handleEdit=(row)=>{ }
const handleDelete=(row)=>{ }
const calculate=()=>{
tableProp.value.forEach(p=>{
let width=getTextWidth(p.label);
tableData.value.forEach(row=>{
let temp=getTextWidth(`空${row[p.prop]}空`);
//在每个数据项前留 2 个汉字的空白
width=temp>width?temp:width;
});
p['width']=width;
})
}
const handleQuery=()=>{
    console.log('form.state:',form.value.state,' form.id:',form.value.id)
    let data={
        username: store.getters["User/getUsername"],
        id: form.value.id,
        states: (form.value.state==='所有')?['通过','未通过','编译错误','待提交']:[form.value.state],
        pageSize: page.value.pageSize,
        currentPage:page.value.currentPage
    }
    if(data.username===undefined ||data.username.length<=0){
        ElMessage('用户名已经无效，请先登录');
        return; 
    }
    ThinkJobQueryPage(data).then((res)=>{ 
        console.log('准备响应接收的数据')
        console.log(res)
        if(res.data.code===200){
            console.log('注意res.data.code')
            page.value.total = res.data.data.total;
            tableData.value = res.data.data.tableData;
            tableProp.value = res.data.data.tableProp;
            calculate();
        }
    }).catch(err=>{
    })
}
</script>
<template>
    <div class="page-container">
        <div class="title-container">
            <span>我的提交</span>
        </div>
        <div class="toolbar-container">
            <div class="toolbar-left">
                <el-form :inline="true">
                    <el-form-item>
                        <el-input v-model="form.id" placeholder="题号" style="width: 120px"/>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="form.state" placeholder="状态" style="width: 200px;">
                            <el-option v-for="(it,index) in options" :key="index" :label="it" :value="it"/>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="handleQuery">查询</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="changeCurrent('ThinkQuestion')">返回</el-button>
                    </el-form-item>
                </el-form>
            </div>
            
        </div>
        <div class="content-container">
            <el-table v-show="hasTable" :data="tableData" stripe border style="width: 100%">
                <el-table-column v-for="it in tableProp" :key="it.prop" :prop="it.prop" :label="it.label" width="150px" />
                <el-table-column fixed="right" label="操作" min-width="120">
                    <template #default="scope">
                    <el-button @click="handleEdit(scope.row)">编辑</el-button>
                    <el-button @click="handleDelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div>
                <el-pagination layout="total,prev, pager, next, jumper,->,sizes "
                :total="page.total"
                v-model:currentPage="page.currentPage"
                v-model:page-size="page.pageSize"
                :page-sizes="[10,20,50,100]"
                @size-change="handleQuery"
                @current-change="handleQuery"
                :hide-on-single-page="true"
                />
            </div>
        </div>
    </div>
</template>