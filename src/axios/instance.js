import axios from 'axios'
import baseConfig from './baseConfig.js'
import router from '../router/index.js'//不能使用useRouter只能在setup中使用
const instance = axios.create({baseConfig})
instance.interceptors.request.use(
    (config)=>{
        let token = localStorage.getItem('myvue_token')
        //发送请求时，携带token
        if(token){
            //如果浏览器中存储不为空
            config.headers.token = token
        }else{
            //如果浏览器中存储的token为空则不能登入
            router.push({path:'/login'})
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error)
    }
)
//使用响应拦截token没过期返回res中的data对象
instance.interceptors.response.use(
    (res) => {
        
        if(res.data.code==-2){//token 失效
            router.push({name:'LoginView'});
            ElMessage('请重新登录！');
        }else{
            console.log(res)
            return res
        } 
    },(err) => {
        return Promise.reject(err)//包括网络断开，连接超时等，
    }
);
export default instance