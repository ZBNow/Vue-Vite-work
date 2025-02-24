export const login=(opt)=>{
    //将Mock收到的请求opt的JSON格式转化为JacaScript对象
    console.log('Mock拦截到请求')
    const {username,password} = JSON.parse(opt.body);
    if(username == "無铭" && password =="123456"){
        return{
            code: 200,
            msg: "成功登入",
            data:{
                username,
                token: username + "@eyJhbGciOiJIUzUxMiJ9.IsImV4cC",
            }
        }
    }else{
         return{
            code: -1,
            msg: "登入失败，请检查用户名或密码是否错误"
         }
    }
}