import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

// 页面和路由配置
const routes = [
  {
    path: '/',
    name: "home",
    component: HomeView
  },
  {
    path: "/floorplan",
    name: "floor",
    component: () => import("../views/FloorPlan.vue")
  },
  {
    path: "/others",
    name: "other",
    component: () => import("../views/Others.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
