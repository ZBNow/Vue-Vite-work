export default{
    namespaced: true,
    state:{
        username: 'admin',// 页面加载时从 localStorage 初始化
        token: '123'
    },
    getters:{
        isLogin(state){
            return(state.username && state.token)
        },
        getUsername(state){
            return state.username
        },

    },
    mutations:{
        setToken(state,{token,username}){
            state.token = token
            state.username = username
            localStorage.setItem('myvue_token',token)
            localStorage.setItem('myvue_username',username)
        },
        clearToken(state){
            localStorage.removeItem('myvue_token')
            localStorage.removeItem('myvue_username')
            state.token = ''
            state.username = ''
        }
    },
    actions: {
        logout({ commit }){
            return new Promise((resolve, reject) => {
                commit('clearToken');
                resolve();
            });
        }
    }
}