import {createApp} from 'vue'
//import './style.css'
import App from './App.vue'
import * as ElIcons from "@element-plus/icons-vue";
import './mock/index.js'//启动模拟服务器Mock实例
import store from './store/index.js'//导入store实例
import router from './router/index.js'//导入router实例
const app = createApp(App)
for(const name in ElIcons){
    app.component(name, ElIcons[name]);
}
app.use(store)
.use(router)//将router实例挂在到Vue应用中，在其他的vue组件中可以使用useRouter来访问该实例
.mount('#app')//挂载路由器和store的应用实例
