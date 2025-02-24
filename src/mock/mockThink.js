const options=[
    {
    label:'一、语言及算法基础篇',
    value:'L1', 
    children:[
    {
    label:'基础(一) C++语言',
    value:'L1-1',
    children:[
    {
    label:'第一章 C++语言入门',
    value:'L1-1-1', 
    },{
    label:'第二章 顺序结构程序设计',
    value:'L1-1-2',
    },{
    label:'第三章 程序的控制结构',
    value:'L1-1-3',
    },{
    label:'第四章 循环结构的程序设计',
    value:'L1-1-4', 
    },{
    label:'第五章 数组',
    value:'L1-1-5',
    },{
    label:'第六章 函数',
    value:'L1-1-6',
    }
    ]
    },
    {
    label:'基础(二) 基础算法',
    value:'L1-2',
    children:[
    {
    label:'第一章 高精度计算',
    value:'L1-2-1'
    },{
    label:'第二章 数据排序',
    value:'L1-2-2'
    },{
    label:'第三章 递推算法',
    value:'L1-2-3'
    },{
    label:'第四章 递归算法',
    value:'L1-2-4'
    },{
    label:'第五章 搜索与回溯算法',
    value:'L1-2-5'
    },{
    label:'第六章 贪心算法',
    value:'L1-2-6'
    },{
    label:'第七章 分治算法',
    value:'L1-2-1'
    },{
    label:'第八章 广度优先搜索算',
    value:'L1-2-1'
    },{
    label:'第九章 动态规划',
    value:'L1-2-1'
    }
    ]
    },
    {
    label:'基础(三) 数据解构',
    value:'L1-3',
    children:[
    {
    label:'第一章 栈',
    value:'L1-3-1'
    },{
    label:'第二章 队列',
    value:'L1-3-2'
    },{
    label:'第三章 树',
    value:'L1-3-3'
    },{
    label:'第四章 图论算法',
    value:'L1-3-4'
    } 
    ]
    },
    ]
    },{
    label:'二、算法提高篇',
    value:'L2',
    children:[
    {
    label:'提高(一) 基础算法',
    value:'L2-1',
    children:[
    {
    label:'第 1 章 贪心算法',
    value:'L2-1-1'
    },
    {
    label:'第 2 章 二分与三分',
    value:'L2-1-2'
    },{
    label:'第 3 章 深搜的剪枝技巧',
    value:'L2-1-3'
    },{
    label:'第 4 章 广搜的优化技巧',
    value:'L2-1-4'
    },
    ]
    },{
    label:'提高(二) 字符串算法',
    value:'L2-2',
    children:[
    {
    label:'第 1 章 哈希和哈希表',
    value:'L2-2-1'
    },{
    label:'第 2 章 KMP 算法',
    value:'L2-2-2'
    },{
    label:'第 3 章 Trie 字典树',
    value:'L2-2-3'
    },{
    label:'第 4 章 AC 自动机',
    value:'L2-2-4'
    },
    ]
    },{
    label:'提高(三) 图论',
    value:'L2-3',
    children:[ 
    {
    label:'第 1 章 最小生成树',
    value:'L2-3-1'
    },{
    label:'第 2 章 最短路问题',
    value:'L2-3-2'
    },{
    label:'第 3 章 SPFA 算法优化',
    value:'L2-3-3'
    },{
    label:'第 4 章 差分约束系统',
    value:'L2-3-4'
    },{
    label:'第 5 章 强联通分量',
    value:'L2-3-5'
    },{
    label:'第 6 章 割点和桥',
    value:'L2-3-6'
    },{
    label:'第 7 章 欧拉回路',
    value:'L2-3-7'
    },
    ]
    },{
    label:'提高(四) 数据结构',
    value:'L2-4',
    children:[
    {
    label:'第 1 章 树状数组',
    value:'L2-4-1'
    },{
    label:'第 2 章 RMQ 问题',
    value:'L2-4-2'
    },{
    label:'第 3 章 线段树',
    value:'L2-4-3'
    },{
    label:'第 4 章 倍增求 LCA',
    value:'L2-4-4'
    },{
    label:'第 5 章 树链剖分',
    value:'L2-4-5'
    },{
    label:'第 6 章 平衡树 Treap',
    value:'L2-4-6'
    } 
    ]
    },{
    label:'提高(五) 动态规划',
    value:'L2-5',
    children:[
    {
    label:'第 1 章 树状数组',
    value:'L2-5-1'
    },{
    label:'第 2 章 树型动态规划',
    value:'L2-5-2'
    },{
    label:'第 3 章 数位动态规划',
    value:'L2-5-3'
    },{
    label:'第 4 章 状态压缩类动态规划',
    value:'L2-5-4'
    },{
    label:'第 5 章 单调队列优化动规',
    value:'L2-5-5'
    },{
    label:'第 6 章 斜率优化动态规划',
    value:'L2-5-6'
    }
    ]
    } 
    ]
    },{
    label:'三、高手训练',
    value:'L3',
    children:[
    {
    label:'高手(一) 基础算法',
    value:'L3-1',
    children:[
    {
    label:'第 1 章 贪心算法',
    value:'L3-1-1'
    },
    {
    label:'第 2 章 二分与三分',
    value:'L3-1-2'
    },{
    label:'第 3 章 深搜的剪枝技巧',
    value:'L3-1-3'
    },{
    label:'第 4 章 广搜的优化技巧',
    value:'L3-1-4'
    },
    ]
    },{
    label:'高手(二) 字符串算法',
    value:'L3-2',
    children:[
    {
    label:'第 1 章 哈希和哈希表',
    value:'L3-2-1'
    },{
    label:'第 2 章 KMP 算法',
    value:'L3-2-2'
    },{
    label:'第 3 章 Trie 字典树',
    value:'L3-2-3'
    },{
    label:'第 4 章 AC 自动机',
    value:'L3-2-4'
    },
    ]
    },{
    label:'高手(三) 图论',
    value:'L3-3',
    children:[ 
    {
    label:'第 1 章 最小生成树',
    value:'L3-3-1'
    },{
    label:'第 2 章 最短路问题',
    value:'L3-3-2'
    },{
    label:'第 3 章 SPFA 算法优化',
    value:'L3-3-3'
    },{
    label:'第 4 章 差分约束系统',
    value:'L3-3-4'
    },{
    label:'第 5 章 强联通分量',
    value:'L3-3-5'
    },{
    label:'第 6 章 割点和桥',
    value:'L3-3-6'
    },{
    label:'第 7 章 欧拉回路',
    value:'L3-3-7'
    },
    ]
    },{
    label:'高手(四) 数据结构',
    value:'L2-4',
    children:[
    {
    label:'第 1 章 树状数组',
    value:'L2-4-1'
    },{
    label:'第 2 章 RMQ 问题',
    value:'L2-4-2'
    },{
    label:'第 3 章 线段树',
    value:'L2-4-3'
    },{
    label:'第 4 章 倍增求 LCA',
    value:'L2-4-4'
    },{
    label:'第 5 章 树链剖分',
    value:'L2-4-5'
    },{
    label:'第 6 章 平衡树 Treap',
    value:'L2-4-6'
    } 
    ]
    },{
    label:'高手(五) 动态规划',
    value:'L2-5',
    children:[
    {
    label:'第 1 章 树状数组',
    value:'L2-5-1'
    },{
    label:'第 2 章 树型动态规划',
    value:'L2-5-2'
    },{
    label:'第 3 章 数位动态规划',
    value:'L2-5-3'
    },{
    label:'第 4 章 状态压缩类动态规划',
    value:'L2-5-4'
    },{
    label:'第 5 章 单调队列优化动规',
    value:'L2-5-5'
    },{
    label:'第 6 章 斜率优化动态规划',
    value:'L2-5-6'
    }
    ]
    } 
    ]
    },{
    label:'四、官方真题',
    value:'L4',
    children:[
    {
    label:'1、NOIP 普及组 ',
    value:'L4-1'
    },{
    label:'2、NOIP 提高组',
    value:'L4-2'
    } 
    ]
    },
]
const Questions=[
    {LMC:'L1-1-1',id:1001, title:'入门测试题目', pass:218929, submit:365933,pdfString:''},
    {LMC:'L1-1-1',id:1002, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L1-1-2',id:1003, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L1-1-2',id:1004, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L1-1-2',id:1005, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L1-1-3',id:1006, title:'Hello,World!', pass:201809, submit:406810,pdfString:''},
    {LMC:'L1-1-3',id:1007, title:'输出第二个整数', pass:167340, submit:216419,pdfString:''},
    {LMC:'L1-1-4',id:1008, title:'对齐输出', pass:117383, submit:349089,pdfString:''},
    {LMC:'L1-1-5',id:1009, title:'字符三角形', pass:136715, submit:247348,pdfString:''},
    {LMC:'L1-1-6',id:1010, title:'地球人口承载力估计', pass:97749, submit:169504,pdfString:''},
    {LMC:'L1-1-6',id:1011, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L1-2-1',id:1012, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L1-2-2',id:1013, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L1-2-3',id:1014, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L1-2-4',id:1015, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L1-2-5',id:1016, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L1-2-6',id:1017, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L1-2-7',id:1018, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L1-2-8',id:1019, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L1-2-8',id:1020, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L1-2-1',id:1021, title:'入门测试题目', pass:218929, submit:365933,pdfString:''},
    {LMC:'L1-2-1',id:1022, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L1-2-2',id:1023, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L1-2-2',id:1024, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L1-2-2',id:1025, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L1-2-3',id:1026, title:'Hello,World!', pass:201809, submit:406810,pdfString:''},
    {LMC:'L1-2-3',id:1027, title:'输出第二个整数', pass:167340, submit:216419,pdfString:''},
    {LMC:'L1-2-4',id:1028, title:'对齐输出', pass:117383, submit:349089,pdfString:''},
    {LMC:'L1-2-4',id:1029, title:'字符三角形', pass:136715, submit:247348,pdfString:''},
    {LMC:'L1-2-6',id:1030, title:'地球人口承载力估计', pass:97749, submit:169504,pdfString:''},
    {LMC:'L1-2-6',id:1031, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L1-2-7',id:1032, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L1-2-7',id:1033, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L1-2-8',id:1034, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L1-2-8',id:1035, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L1-3-2',id:1036, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L1-3-1',id:1027, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L1-3-1',id:1038, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L1-3-1',id:1039, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L1-3-2',id:1040, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L1-3-3',id:1041, title:'输出第二个整数', pass:167340, submit:216419,pdfString:''},
    {LMC:'L1-3-3',id:1042, title:'对齐输出', pass:117383, submit:349089,pdfString:''},
    {LMC:'L1-3-4',id:1043, title:'字符三角形', pass:136715, submit:247348,pdfString:''},
    {LMC:'L1-3-4',id:1044, title:'地球人口承载力估计', pass:97749, submit:169504,pdfString:''},
    {LMC:'L1-3-4',id:1045, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L1-3-4',id:1046, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L1-2-1',id:1047, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L1-2-2',id:1048, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L1-2-3',id:1049, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L1-2-4',id:1050, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L1-3-6',id:1051, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L1-3-7',id:1052, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L1-3-8',id:1053, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L1-2-2',id:1054, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L1-2-1',id:1055, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L1-3-5',id:1056, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L1-3-4',id:1057, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L1-3-3',id:1058, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L1-3-2',id:1059, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L1-3-1',id:1060, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L2-1-1',id:2001, title:'入门测试题目', pass:218929, submit:365933,pdfString:''},
    {LMC:'L2-1-2',id:2002, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L2-1-3',id:2003, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L2-1-4',id:2004, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L2-1-1',id:2005, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L2-1-2',id:2006, title:'Hello,World!', pass:201809, submit:406810,pdfString:''},
    {LMC:'L2-1-3',id:2007, title:'输出第二个整数', pass:167340, submit:216419,pdfString:''},
    {LMC:'L2-1-4',id:2008, title:'对齐输出', pass:117383, submit:349089,pdfString:''},
    {LMC:'L2-1-1',id:2009, title:'字符三角形', pass:136715, submit:247348,pdfString:''},
    {LMC:'L2-1-2',id:2010, title:'地球人口承载力估计', pass:97749, submit:169504,pdfString:''},
    {LMC:'L2-1-3',id:2011, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L2-1-4',id:2012, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L2-1-1',id:2013, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L2-1-2',id:2014, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L2-1-3',id:2015, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L2-1-4',id:2016, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L2-1-1',id:2017, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L2-1-2',id:2018, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L2-1-3',id:2019, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L2-1-4',id:2020, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L2-2-1',id:2021, title:'入门测试题目', pass:218929, submit:365933,pdfString:''},
    {LMC:'L2-2-2',id:2022, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L2-2-3',id:2023, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L2-2-4',id:2024, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L2-2-1',id:2025, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L2-2-2',id:2026, title:'Hello,World!', pass:201809, submit:406810,pdfString:''},
    {LMC:'L2-2-3',id:2027, title:'输出第二个整数', pass:167340, submit:216419,pdfString:''},
    {LMC:'L2-2-4',id:2028, title:'对齐输出', pass:117383, submit:349089,pdfString:''},
    {LMC:'L2-2-1',id:2029, title:'字符三角形', pass:136715, submit:247348,pdfString:''},
    {LMC:'L2-2-2',id:2030, title:'地球人口承载力估计', pass:97749, submit:169504,pdfString:''},
    {LMC:'L2-2-3',id:2031, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L2-2-4',id:2032, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L2-2-1',id:2033, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L2-2-2',id:2034, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L2-2-3',id:2035, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L2-2-4',id:2036, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L2-2-1',id:2037, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L2-2-2',id:2038, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L2-2-3',id:2039, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L2-2-4',id:2040, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L2-3-1',id:2041, title:'入门测试题目', pass:218929, submit:365933,pdfString:''},
    {LMC:'L2-3-2',id:2042, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L2-3-3',id:2043, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L2-3-4',id:2044, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L2-3-5',id:2045, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L2-3-6',id:2046, title:'Hello,World!', pass:201809, submit:406810,pdfString:''},
    {LMC:'L2-3-7',id:2047, title:'输出第二个整数', pass:167340, submit:216419,pdfString:''},
    {LMC:'L2-3-8',id:2048, title:'对齐输出', pass:117383, submit:349089,pdfString:''},
    {LMC:'L2-3-9',id:2049, title:'字符三角形', pass:136715, submit:247348,pdfString:''},
    {LMC:'L2-3-1',id:2050, title:'地球人口承载力估计', pass:97749, submit:169504,pdfString:''},
    {LMC:'L2-3-2',id:2051, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L2-3-3',id:2052, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L2-3-4',id:2053, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L2-3-5',id:2054, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L2-3-6',id:2055, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L2-3-7',id:2056, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L2-3-8',id:2057, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L2-3-9',id:2058, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L2-3-1',id:2069, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L2-3-2',id:2060, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L2-3-3',id:2061, title:'入门测试题目', pass:218929, submit:365933,pdfString:''},
    {LMC:'L2-3-4',id:2062, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L2-3-5',id:2063, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L2-3-6',id:2064, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L2-3-7',id:2065, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L2-3-8',id:2066, title:'Hello,World!', pass:201809, submit:406810,pdfString:''},
    {LMC:'L2-3-9',id:2067, title:'输出第二个整数', pass:167340, submit:216419,pdfString:''},
    {LMC:'L2-3-1',id:2068, title:'对齐输出', pass:117383, submit:349089,pdfString:''},
    {LMC:'L2-3-2',id:2069, title:'字符三角形', pass:136715, submit:247348,pdfString:''},
    {LMC:'L2-3-3',id:2070, title:'地球人口承载力估计', pass:97749, submit:169504,pdfString:''},
    {LMC:'L2-3-4',id:2071, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L2-3-5',id:2072, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L2-3-6',id:2073, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L2-3-7',id:2074, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L2-3-8',id:2075, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L2-3-9',id:2076, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L2-3-1',id:2077, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L2-3-2',id:2078, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L2-3-3',id:2079, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L2-3-4',id:2080, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L2-4-1',id:2091, title:'入门测试题目', pass:218929, submit:365933,pdfString:''},
    {LMC:'L2-4-2',id:2092, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L2-4-3',id:2093, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L2-4-4',id:2094, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L2-4-5',id:2095, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L2-4-6',id:2096, title:'Hello,World!', pass:201809, submit:406810,pdfString:''},
    {LMC:'L2-4-1',id:2097, title:'输出第二个整数', pass:167340, submit:216419,pdfString:''},
    {LMC:'L2-4-2',id:2098, title:'对齐输出', pass:117383, submit:349089,pdfString:''},
    {LMC:'L2-4-3',id:2099, title:'字符三角形', pass:136715, submit:247348,pdfString:''},
    {LMC:'L2-4-4',id:2100, title:'地球人口承载力估计', pass:97749, submit:169504,pdfString:''},
    {LMC:'L2-4-5',id:2101, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L2-4-6',id:2102, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L2-4-1',id:2103, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L2-4-2',id:2104, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L2-4-3',id:2105, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L2-4-4',id:2106, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L2-4-5',id:2107, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L2-4-6',id:2108, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L2-4-1',id:2109, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L2-4-2',id:2110, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L2-5-1',id:2111, title:'入门测试题目', pass:218929, submit:365933,pdfString:''},
    {LMC:'L2-5-2',id:2112, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L2-5-3',id:2113, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L2-5-4',id:2114, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L2-5-5',id:2115, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L2-5-6',id:2116, title:'Hello,World!', pass:201809, submit:406810,pdfString:''},
    {LMC:'L2-5-7',id:2117, title:'输出第二个整数', pass:167340, submit:216419,pdfString:''},
    {LMC:'L2-5-8',id:2118, title:'对齐输出', pass:117383, submit:349089,pdfString:''},
    {LMC:'L2-5-9',id:2119, title:'字符三角形', pass:136715, submit:247348,pdfString:''},
    {LMC:'L2-5-1',id:2120, title:'地球人口承载力估计', pass:97749, submit:169504,pdfString:''},
    {LMC:'L2-5-2',id:2121, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L2-5-3',id:2122, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L2-5-4',id:2123, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L2-5-5',id:2124, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L2-5-6',id:2125, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L2-5-7',id:2126, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L2-5-8',id:2127, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L2-5-9',id:2128, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L2-5-1',id:2129, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L2-5-2',id:2120, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L3-1-1',id:3001, title:'入门测试题目', pass:218929, submit:365933,pdfString:''},
    {LMC:'L3-1-2',id:3002, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L3-1-3',id:3003, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L3-1-4',id:3004, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L3-1-1',id:3005, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L3-1-2',id:3006, title:'Hello,World!', pass:201809, submit:406810,pdfString:''},
    {LMC:'L3-1-3',id:3007, title:'输出第二个整数', pass:167340, submit:216419,pdfString:''},
    {LMC:'L3-1-4',id:3008, title:'对齐输出', pass:117383, submit:349089,pdfString:''},
    {LMC:'L3-1-1',id:3009, title:'字符三角形', pass:136715, submit:247348,pdfString:''},
    {LMC:'L3-1-2',id:3010, title:'地球人口承载力估计', pass:97749, submit:169504,pdfString:''},
    {LMC:'L3-1-3',id:3011, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L3-1-4',id:3012, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L3-1-1',id:3013, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L3-1-2',id:3014, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L3-1-3',id:3015, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L3-1-4',id:3016, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L3-1-1',id:3017, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L3-1-2',id:3018, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L3-1-3',id:3019, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L3-1-4',id:3020, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L3-2-1',id:3021, title:'入门测试题目', pass:218929, submit:365933,pdfString:''},
    {LMC:'L3-2-2',id:3022, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L3-2-3',id:3023, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L3-2-4',id:3024, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L3-2-1',id:3025, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L3-2-2',id:3026, title:'Hello,World!', pass:201809, submit:406810,pdfString:''},
    {LMC:'L3-2-3',id:3027, title:'输出第二个整数', pass:167340, submit:216419,pdfString:''},
    {LMC:'L3-2-4',id:3028, title:'对齐输出', pass:117383, submit:349089,pdfString:''},
    {LMC:'L3-2-1',id:3029, title:'字符三角形', pass:136715, submit:247348,pdfString:''},
    {LMC:'L3-2-2',id:3030, title:'地球人口承载力估计', pass:97749, submit:169504,pdfString:''},
    {LMC:'L3-2-3',id:3031, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L3-2-4',id:3032, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L3-2-1',id:3033, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L3-2-2',id:3034, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L3-2-3',id:3035, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L3-2-4',id:3036, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L3-2-1',id:3037, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L3-2-2',id:3038, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L3-2-3',id:3039, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L3-2-4',id:3040, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L3-3-1',id:3041, title:'入门测试题目', pass:218929, submit:365933,pdfString:''},
    {LMC:'L3-3-2',id:3042, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L3-3-3',id:3043, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L3-3-4',id:3044, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L3-3-5',id:3045, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L3-3-6',id:3046, title:'Hello,World!', pass:201809, submit:406810,pdfString:''},
    {LMC:'L3-3-7',id:3047, title:'输出第二个整数', pass:167340, submit:216419,pdfString:''},
    {LMC:'L3-3-1',id:3048, title:'对齐输出', pass:117383, submit:349089,pdfString:''},
    {LMC:'L3-3-2',id:3049, title:'字符三角形', pass:136715, submit:247348,pdfString:''},
    {LMC:'L3-3-1',id:3050, title:'地球人口承载力估计', pass:97749, submit:169504,pdfString:''},
    {LMC:'L3-3-2',id:3051, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L3-3-3',id:3052, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L3-3-4',id:3053, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L3-3-5',id:3054, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L3-3-6',id:3055, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L3-3-7',id:3056, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L3-3-3',id:3057, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L3-3-4',id:3058, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L3-3-1',id:3069, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L3-3-2',id:3060, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L3-3-3',id:3061, title:'入门测试题目', pass:218929, submit:365933,pdfString:''},
    {LMC:'L3-3-4',id:3062, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L3-3-5',id:3063, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L3-3-6',id:3064, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L3-3-7',id:3065, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L3-3-5',id:3066, title:'Hello,World!', pass:201809, submit:406810,pdfString:''},
    {LMC:'L3-3-6',id:3067, title:'输出第二个整数', pass:167340, submit:216419,pdfString:''},
    {LMC:'L3-3-1',id:3068, title:'对齐输出', pass:117383, submit:349089,pdfString:''},
    {LMC:'L3-3-2',id:3069, title:'字符三角形', pass:136715, submit:247348,pdfString:''},
    {LMC:'L3-3-3',id:3070, title:'地球人口承载力估计', pass:97749, submit:169504,pdfString:''},
    {LMC:'L3-3-4',id:3071, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L3-3-5',id:3072, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L3-3-6',id:3073, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L3-3-7',id:3074, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L3-3-7',id:3075, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L3-3-1',id:3076, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L3-3-2',id:3077, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L3-3-3',id:3078, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L3-3-4',id:3079, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L3-3-5',id:3080, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L3-4-1',id:3091, title:'入门测试题目', pass:218929, submit:365933,pdfString:''},
    {LMC:'L3-4-2',id:3092, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L3-4-3',id:3093, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L3-4-4',id:3094, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L3-4-5',id:3095, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L3-4-6',id:3096, title:'Hello,World!', pass:201809, submit:406810,pdfString:''},
    {LMC:'L3-4-1',id:3097, title:'输出第二个整数', pass:167340, submit:216419,pdfString:''},
    {LMC:'L3-4-2',id:3098, title:'对齐输出', pass:117383, submit:349089,pdfString:''},
    {LMC:'L3-4-3',id:3099, title:'字符三角形', pass:136715, submit:247348,pdfString:''},
    {LMC:'L3-4-4',id:3100, title:'地球人口承载力估计', pass:97749, submit:169504,pdfString:''},
    {LMC:'L3-4-5',id:3101, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L3-4-6',id:3102, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L3-4-1',id:3103, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L3-4-2',id:3104, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L3-4-3',id:3105, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L3-4-4',id:3106, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L3-4-5',id:3107, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L3-4-6',id:3108, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L3-4-1',id:3109, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L3-4-2',id:3110, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L3-5-1',id:3111, title:'入门测试题目', pass:218929, submit:365933,pdfString:''},
    {LMC:'L3-5-2',id:3112, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L3-5-3',id:3113, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L3-5-4',id:3114, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L3-5-5',id:3115, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L3-5-6',id:3116, title:'Hello,World!', pass:201809, submit:406810,pdfString:''},
    {LMC:'L3-5-1',id:3117, title:'输出第二个整数', pass:167340, submit:216419,pdfString:''},
    {LMC:'L3-5-2',id:3118, title:'对齐输出', pass:117383, submit:349089,pdfString:''},
    {LMC:'L3-5-3',id:3119, title:'字符三角形', pass:136715, submit:247348,pdfString:''},
    {LMC:'L3-5-4',id:3120, title:'地球人口承载力估计', pass:97749, submit:169504,pdfString:''},
    {LMC:'L3-5-5',id:3121, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L3-5-6',id:3122, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L3-5-1',id:3123, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L3-5-2',id:3124, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L3-5-3',id:3125, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L3-5-4',id:3126, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L3-5-5',id:3127, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L3-5-6',id:3128, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L3-5-1',id:3129, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L3-5-2',id:3120, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L4-1',id:4001, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L4-1',id:4002, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L4-1',id:4003, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-1',id:4004, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L4-1',id:4005, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L4-1',id:4006, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L4-1',id:4007, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-1',id:4008, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L4-1',id:4009, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-1',id:4010, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L4-1',id:4011, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L4-1',id:4012, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L4-1',id:4013, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-1',id:4014, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L4-1',id:4015, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L4-1',id:4016, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L4-1',id:4017, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-1',id:4018, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L4-1',id:4019, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-1',id:4020, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L4-1',id:4021, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L4-1',id:4022, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L4-1',id:4023, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-1',id:4024, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L4-1',id:4025, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L4-1',id:4026, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L4-1',id:4027, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-1',id:4028, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L4-1',id:4029, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-1',id:4030, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L4-1',id:4031, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L4-1',id:4032, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L4-1',id:4033, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-1',id:4034, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L4-1',id:4035, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L4-1',id:4036, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L4-1',id:4037, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-1',id:4038, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L4-1',id:4039, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-1',id:4040, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L4-1',id:4041, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L4-1',id:4042, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L4-1',id:4043, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-1',id:4044, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L4-1',id:4045, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L4-1',id:4046, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L4-1',id:4047, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-1',id:4048, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L4-1',id:4049, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-1',id:4050, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L4-1',id:4051, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L4-1',id:4052, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L4-1',id:4053, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-1',id:4054, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L4-1',id:4055, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L4-1',id:4056, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L4-1',id:4057, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-1',id:4058, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L4-1',id:4059, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-1',id:4050, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L4-2',id:4051, title:'入门测试题目', pass:218929, submit:365933,pdfString:''},
    {LMC:'L4-2',id:4052, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L4-2',id:4053, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L4-2',id:4054, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-2',id:4055, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L4-2',id:4056, title:'Hello,World!', pass:201809, submit:406810,pdfString:''},
    {LMC:'L4-2',id:4057, title:'输出第二个整数', pass:167340, submit:216419,pdfString:''},
    {LMC:'L4-2',id:4058, title:'对齐输出', pass:117383, submit:349089,pdfString:''},
    {LMC:'L4-2',id:4059, title:'字符三角形', pass:136715, submit:247348,pdfString:''},
    {LMC:'L4-2',id:4060, title:'地球人口承载力估计', pass:97749, submit:169504,pdfString:''},
    {LMC:'L4-2',id:4061, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L4-2',id:4062, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L4-2',id:4063, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-2',id:4064, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L4-2',id:4065, title:'【例 1.5】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L4-2',id:4066, title:'【例 1.6】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L4-2',id:4067, title:'【例 1.7】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-2',id:4068, title:'【例 1.8】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L4-2',id:4069, title:'【例 1.9】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-2',id:4070, title:'【例 1.10】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L4-2',id:4071, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L4-2',id:4072, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L4-2',id:4073, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-2',id:4074, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L4-2',id:4075, title:'【例 1.5】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L4-2',id:4076, title:'【例 1.6】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L4-2',id:4077, title:'【例 1.7】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-2',id:4078, title:'【例 1.8】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L4-2',id:4079, title:'【例 1.9】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-2',id:4080, title:'【例 1.10】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L4-2',id:4081, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L4-2',id:4082, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L4-2',id:4083, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-2',id:4084, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L4-2',id:4085, title:'【例 1.5】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L4-2',id:4086, title:'【例 1.6】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L4-2',id:4087, title:'【例 1.7】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-2',id:4088, title:'【例 1.8】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L4-2',id:4089, title:'【例 1.9】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-2',id:4090, title:'【例 1.10】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L4-2',id:4091, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L4-2',id:4092, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L4-2',id:4093, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-2',id:4094, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L4-2',id:4095, title:'【例 1.5】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L4-2',id:4096, title:'【例 1.6】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L4-2',id:4097, title:'【例 1.7】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-2',id:4098, title:'【例 1.8】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L4-2',id:4099, title:'【例 1.9】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-2',id:4100, title:'【例 1.10】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L4-2',id:4101, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L4-2',id:4102, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L4-2',id:4103, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-2',id:4104, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L4-2',id:4105, title:'【例 1.5】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L4-2',id:4106, title:'【例 1.6】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L4-2',id:4107, title:'【例 1.7】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-2',id:4108, title:'【例 1.8】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L4-2',id:4109, title:'【例 1.9】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-2',id:4110, title:'【例 1.10】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
    {LMC:'L4-2',id:4111, title:'【例 1.1】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L4-2',id:4112, title:'【例 1.2】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L4-2',id:4113, title:'【例 1.3】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-2',id:4114, title:'【例 1.4】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L4-2',id:4115, title:'【例 1.5】计算机输出', pass:118012, submit:237922,pdfString:''},
    {LMC:'L4-2',id:4116, title:'【例 1.6】梯形面积', pass:87162, submit:220049,pdfString:''},
    {LMC:'L4-2',id:4117, title:'【例 1.7】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-2',id:4118, title:'【例 1.8】牛吃牧草', pass:71189, submit:114202,pdfString:''},
    {LMC:'L4-2',id:4119, title:'【例 1.9】电影票', pass:96430, submit:163622,pdfString:''},
    {LMC:'L4-2',id:4120, title:'【例 1.10】牛吃牧草', pass:71189, submit:114202,pdfString:''}, 
]
const Jobs=[
    {username:'admin' ,runid:'31167001',id:'1001',state:'待提交' ,language:'G++14', 
    size:544,time:'2024-07-18 14:45',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167002',id:'1157',state:'未通过' ,language:'G++14', 
    size:283,time:'2024-07-18 14:45',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31166999',id:'1003',state:'未通过' ,language:'G++14', 
    size:155,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31166998',id:'2046',state:'通过' ,language:'G++14', size:219,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31166997',id:'1225',state:'未通过' ,language:'G++14', 
    size:779,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31166996',id:'2021',state:'通过' ,language:'G++14', size:191,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31166995',id:'2071',state:'通过' ,language:'G++14', size:115,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31166992',id:'1023',state:'未通过' ,language:'G++14', 
    size:132,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31166991',id:'1289',state:'通过' ,language:'G++14', size:348,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31166990',id:'1131',state:'待提交' ,language:'G++14', 
    size:261,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31166989',id:'1204',state:'未通过' ,language:'G++14', 
    size:240,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31166988',id:'2061',state:'通过' ,language:'G++14', size:144,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31166987',id:'1001',state:'通过' ,language:'G++14', size:131,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31166986',id:'1001',state:'通过' ,language:'G++14', size:236,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31166984',id:'1984',state:'未通过' ,language:'G++14', 
    size:500,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31166983',id:'1176',state:'未通过' ,language:'G++14', 
    size:298,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31166982',id:'1002',state:'通过' ,language:'G++14', size:106,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167002',id:'1036',state:'通过' ,language:'G++14', size:121,time:'2024-07-18 14:45',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167003',id:'1113',state:'通过' ,language:'G++14', size:544,time:'2024-07-18 14:45',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167004',id:'1157',state:'未通过' ,language:'G++14', 
    size:283,time:'2024-07-18 14:45',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167005',id:'1001',state:'未通过' ,language:'G++14', 
    size:155,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167006',id:'1002',state:'未通过' ,language:'G++14', 
    size:219,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167007',id:'1225',state:'未通过' ,language:'G++14', 
    size:779,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167008',id:'2021',state:'通过' ,language:'G++14', size:191,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167009',id:'2071',state:'通过' ,language:'G++14', size:115,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167010',id:'1023',state:'未通过' ,language:'G++14', 
    size:132,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167011',id:'1289',state:'通过' ,language:'G++14', size:348,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167012',id:'1131',state:'未通过' ,language:'G++14', 
    size:261,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167013',id:'1204',state:'未通过' ,language:'G++14', 
    size:240,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167014',id:'2061',state:'通过' ,language:'G++14', size:144,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167015',id:'2054',state:'通过' ,language:'G++14', size:131,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167016',id:'1091',state:'通过' ,language:'G++14', size:236,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167017',id:'1984',state:'未通过' ,language:'G++14', 
    size:500,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167018',id:'1176',state:'未通过' ,language:'G++14', 
    size:298,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167019',id:'1023',state:'未通过' ,language:'G++14', 
    size:132,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167020',id:'1289',state:'通过' ,language:'G++14', size:348,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167021',id:'1131',state:'未通过' ,language:'G++14', 
    size:261,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167022',id:'1204',state:'未通过' ,language:'G++14', 
    size:240,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167023',id:'2061',state:'通过' ,language:'G++14', size:144,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167024',id:'2054',state:'通过' ,language:'G++14', size:131,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167025',id:'1091',state:'通过' ,language:'G++14', size:236,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167026',id:'1984',state:'未通过' ,language:'G++14', 
    size:500,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167027',id:'1176',state:'未通过' ,language:'G++14', 
    size:298,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167028',id:'1007',state:'通过' ,language:'G++14', size:106,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167029',id:'1048',state:'编译错误',language:'G++14', 
    size:290,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167031',id:'2021',state:'通过' ,language:'G++14', size:196,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167032',id:'2055',state:'未通过' ,language:'G++14', 
    size:205,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167033',id:'1004',state:'通过' ,language:'G++14', size:176,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167034',id:'2029',state:'通过' ,language:'G++14', size:210,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167035',id:'1405',state:'编译错误',language:'G++14', 
    size:388,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167036',id:'1069',state:'通过' ,language:'G++14', size:183,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167037',id:'1268',state:'编译错误',language:'G++14', 
    size:527,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167038',id:'1131',state:'未通过' ,language:'G++14', 
    size:261,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167039',id:'1204',state:'未通过' ,language:'G++14', 
    size:240,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167040',id:'2061',state:'通过' ,language:'G++14', size:144,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167041',id:'2054',state:'通过' ,language:'G++14', size:131,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167042',id:'1091',state:'通过' ,language:'G++14', size:236,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167043',id:'1984',state:'未通过' ,language:'G++14', 
    size:500,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167044',id:'1176',state:'未通过' ,language:'G++14', 
    size:298,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167045',id:'1007',state:'通过' ,language:'G++14', size:106,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167046',id:'1048',state:'编译错误',language:'G++14', 
    size:290,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167047',id:'2021',state:'通过' ,language:'G++14', size:196,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167048',id:'2055',state:'未通过' ,language:'G++14', 
    size:205,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167049',id:'1004',state:'通过' ,language:'G++14', size:176,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167050',id:'2029',state:'通过' ,language:'G++14', size:210,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167051',id:'1405',state:'编译错误',language:'G++14', 
    size:388,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167052',id:'1069',state:'通过' ,language:'G++14', size:183,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167053',id:'1268',state:'编译错误',language:'G++14', 
    size:527,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167054',id:'1113',state:'通过' ,language:'G++14', size:216,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167055',id:'1006',state:'通过' ,language:'G++14', size:165,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167056',id:'1131',state:'未通过' ,language:'G++14', 
    size:264,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167057',id:'1091',state:'通过' ,language:'G++14', size:236,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167058',id:'1984',state:'未通过' ,language:'G++14', 
    size:500,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167059',id:'1176',state:'未通过' ,language:'G++14', 
    size:298,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167060',id:'1007',state:'通过' ,language:'G++14', size:106,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167061',id:'1048',state:'编译错误',language:'G++14', 
    size:290,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167062',id:'2021',state:'通过' ,language:'G++14', size:196,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167063',id:'2055',state:'未通过' ,language:'G++14', 
    size:205,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167064',id:'1004',state:'通过' ,language:'G++14', size:176,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167065',id:'2029',state:'通过' ,language:'G++14', size:210,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167066',id:'1405',state:'编译错误',language:'G++14', 
    size:388,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167067',id:'1069',state:'通过' ,language:'G++14', size:183,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167068',id:'1268',state:'编译错误',language:'G++14', 
    size:527,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167069',id:'1113',state:'通过' ,language:'G++14', size:216,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167070',id:'1006',state:'通过' ,language:'G++14', size:165,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167071',id:'1131',state:'未通过' ,language:'G++14', 
    size:264,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167072',id:'1408',state:'通过' ,language:'G++14', size:453,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167073',id:'2040',state:'通过' ,language:'G++14', size:193,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'zhangsan',runid:'31167074',id:'1086',state:'通过' ,language:'G++14', size:310,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    {username:'admin' ,runid:'31167075',id:'1251',state:'编译错误',language:'G++14', 
    size:931,time:'2024-07-18 14:44',programString:'我已经编写了一段程序'},
    ];
    const JobProps=[
        {prop:'runid',label:'运行号'},
        {prop:'id',label:'题号'},
        {prop:'state',label:'状态'},
        {prop:'language',label:'语言'},
        {prop:'size',label:'代码长度(Bytes)'},
        {prop:'time',label:'提交时间'},
    ];
    const QuestionProps=[
        { prop:'LMC',label:'分区',width:100},
        { prop:'id',label:'题号',width:100},
        { prop:'title',label:'题目名称',width:120},
        { prop:'pass',label:'通过数' ,width:120},
        { prop:'submit',label:'提交数',width:120}
    ]
    export const QuestionInit=()=>{
        return{
            code:200,
            msg:'获取数据成功',
            data:{options}
        }
    }
    export const QuestionQuery=(opt)=>{
        console.log('我来处理发出的query请求')
        console.log(opt)
        let arr1=opt.url.split('?'); //两个元素,第二个元素是参数
        let arr2=arr1[1].split('='); 
        let LMC=arr2[1];
        console.log('LMC为:',LMC)

        let tableData=Questions.filter(el=>el.LMC.startsWith(LMC));
        return {
            code:200,
            msg:'提取题库',
            data:{ tableData, tableProp:QuestionProps }
        }
    }
    export const JobQueryPage =(opt)=>{
        console.log('服务器收到题目通过情况准备进行查询')
        let {username,id,states,currentPage,pageSize} = JSON.parse(opt.body);
        console.log('发送的opt',opt.body,username)
        let res = Jobs.filter(el=>el.username===username);
        if(id!==undefined && id.length>0){ res=res.filter(el=>el.id===id); }
        if(states!==undefined && states.length>0){
            console.log(res)
            res=res.filter(el=>states.includes(el.state));
        }
        let tableData=res.slice((currentPage-1)*pageSize,currentPage*pageSize)
        return{
            code:200,
            msg:'查询我的程序',
            data:{ total:res.length, tableData, tableProp:JobProps }
        }
    }
    export const JobDelete=(opt)=>{
        let {runids}= JSON.parse(opt.body);
        for(let k=0;k<runids.length;k++){
        let index=-1;
        for(let i=0;i<Jobs.length;i++){
        if(Jobs[i].runid===runids[k]){
        index=i; 
        break;
        }
        }
        if(index>=0){ 
        Jobs.splice(index,1); 
        }
        }
        return {
        code:200,
        msg:'删除成功'
        }
    }
    export const UploadQuestion=(opt)=>{
        let {id,pdfString}=JSON.parse(opt.body);
        for(let i=0;i<Questions.length;i++){
        if(Questions[i].id===id){
        Questions[i].pdfString=pdfString;
        return { code:200, msg:'更新成功!'} 
        }
        }
        return { code:201, msg:'更新失败!' }
    }