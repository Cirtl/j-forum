import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import router  from './router'
import store from './store'

import App from '@/App'
import { service } from '@/utils/api'

const app = createApp(App)

app.config.globalProperties.$service = service

app
    .use(router)
    .use(store)
    .use(ElementPlus)
    .use(Antd)
    .mount('#app')
