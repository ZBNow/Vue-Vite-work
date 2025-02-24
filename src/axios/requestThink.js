import instance from './instance.js'
export const ThinkQuestionInit=()=>{
    return instance({
        url:'/train/think/question/init',
        method:'get'
    })
}
export const ThinkQuestionQuery=(param)=>{
    return instance({
        url: `/train/think/question/query?LMC=${param}`,
        method:'get'
    })
}
export const ThinkJobQueryPage=(data)=>{
    console.log('准备发送请求')
    return instance({
        url:'/train/think/job/query',
        method:'post',
        data
    })
}
export const ThinkJobDelete=(data)=>{
    return instance({
        url:'/train/think/job/delete',
        method:'post',
        data
    }) 
}
export const UploadQuestionPDF=(data)=>{
    return instance({
    url:'/manage/think/question/upload',
    method:'post',
    data
    }) 
}