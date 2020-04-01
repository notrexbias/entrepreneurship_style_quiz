import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index.html',
    component: Home,
    alias: '/'
  },
  {
    path: '*',
    redirect: '/home',
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('../views/Result.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.afterEach((to) => {
  window.gtag('config', window.GA_TRACKING_ID, {
    page_path: to.fullPath,
    app_name: 'Entrepreneurship Style Web App',
    send_page_view: true,
  });
});

export default router
