import './assets/main.css'

import { createApp } from 'vue'
import App from './MyApp.vue'
import axios from "axios";
import qs from "qs"

const app = createApp(App)
app.provide("$axios",axios)
app.provide("$qs",qs)
app.mount('#app')
