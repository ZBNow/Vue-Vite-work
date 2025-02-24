import Mock from 'mockjs'
import * as apps from './mockApp.js'
import * as think from "./mockThink.js"
Mock.setup({
    timeout:1000
})
//注册login的拦截服务
Mock.mock(/\/login/,"post",(opt)=>apps.login(opt));
//注册ThinkQuestion的拦截服务
Mock.mock(/\/train\/think\/question\/init/,"get",(opt)=>think.QuestionInit(opt));
Mock.mock(/\/train\/think\/question\/query/,"get",(opt)=>think.QuestionQuery(opt));
//注册ThinkJob的拦截服务
Mock.mock(/\/train\/think\/job\/query/,"post",(opt)=>think.JobQueryPage(opt));
Mock.mock(/\/train\/think\/job\/delete/,"post",(opt)=>think.JobDelete(opt));
Mock.mock(/\/manage\/think\/question\/upload/,"post",(opt)=>think.UploadQuestion(opt))