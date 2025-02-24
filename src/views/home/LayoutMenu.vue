<script setup>
const menus=[
{
    index:'1',
    title:'课程实训',
    icon:'Notebook',
    children:[
        {
        index:'1-1',
        title:'计算思维',
        path:'/train/think',
        name:'ThinkHome'
        },
        {
        index:'1-2',
        title:'硬件开发',
        path:'/train/hard',
        name:'HardHome'
        },
        {
        index:'1-3',
        title:'软件开发',
        path:'/train/soft',
        name:'SoftHome'
        }
    ]
    },
    {
    index:'2',
    title:'专业实习',
    icon:'Document',
    children:[
        {
        index:'2-1',
        title:'集中实习',
        path:'/pract/central',
        name:'CentralHome'
        },
        {
        index:'2-2',
        title:'企业实习',
        path:'/pract/enterprise',
        name:'EnterpriseHome'
        }
    ]
    },
    {
    index:'3',
    title:'毕业设计',
    icon:'Edit',
    children:[
        {
        index:'3-1',
        title:'选题申报',
        path:'/design/topic',
        name:"TopicHome",
        },
        {
        index:'3-2',
        title:'开题答辩',
        path:'/design/plane',
        name:"PlaneHome",
        },
        {
        index:'3-3',
        title:'过程指导',
        path:'/design/guide',
        name:"GuideHome",
        },
        {
        index:'3-4',
        title:'论文答辩',
        path:'/design/reply',
        name:"ReplyHome",
        }, 
        {
        index:'3-5',
        title:'论文提交',
        path:'/design/submit',
        name:"SubmitHome",
        },
    ]
    },
    {
    index:'4',
    title:'临时测试',
    icon:'Guide',
    path:'/test',
    name:"Test",
    },
    {
    index :"5",
    title:'系统管理',
    icon:'Setting',
    children:[
        {
        index:'5-1',
        title:'思维题库',
        path:'/manage/train/think',
        name:'ThinkManageHome',
        }
    ]
},
];
</script>

<template>
    <el-menu :router="true">
        <template v-for="item in menus" :key="item.index">
            <template v-if="item.children===undefined">
                <el-menu-item :route="item.path" :index="item.index">
                <span>{{item.title}}</span>
                </el-menu-item>
            </template>
            <template v-else>
                <el-sub-menu :index="item.index">
                    <template #title>
                        <el-icon><component :is="item.icon"></component></el-icon>
                        <span>{{item.title}}</span>
                    </template>
                    <el-menu-item v-for="it in item.children" :key="it.index":route="it.path" :index="it.index">{{it.title}}</el-menu-item>
                </el-sub-menu>
            </template>
        </template>
    </el-menu>
</template>