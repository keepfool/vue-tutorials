import Vue from 'vue'
import VueRouter from 'vue-router'
import routeConfig from './route-config'

Vue.use(VueRouter)

const router = new VueRouter()
router.map(routeConfig)
const App = Vue.extend(require('./app.vue'))
router.start(App, '#app')