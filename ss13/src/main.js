import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//khởi tạo ứng dụng
const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
})

// sửa dụng các thư viện bên ngoài
app.use(vuetify)

// gắn component App vào trong ứng dụng
app.mount('#app')