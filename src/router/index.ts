import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import localCache from "@/utils/cache"
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("../views/Main/main.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login/Login.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token")
    if (!token) {
      router.push("/login")
    }
  }
})
export default router
