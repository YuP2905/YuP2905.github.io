import { createRouter, createWebHashHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

// 页面和路由配置
const routes = [
  {
    path: '/',
    name: "home",
    component: HomeView
  },
  {
    path: "/others",
    name: "other",
    component: () => import("../views/Others.vue")
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
