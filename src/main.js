import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'	// 导入路由模块
const app = createApp(App)
app.use(router)		// 挂载路由模块
app.mount('#app')
