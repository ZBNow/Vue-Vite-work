import instance from './instance.js'
export const login=(data)=>{
    return instance({url:'/login',method:'post',data})
}
export const register=(data)=>{
    
}