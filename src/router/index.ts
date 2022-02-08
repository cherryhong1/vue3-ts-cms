import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import localCache from "@/utils/cache"
import { firstMenu } from "@/utils/mapMenu"
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/main",
    name: "main",
    component: () => import("../views/main/main.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login/Login.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("../views/no-found/index.vue")
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
  if (to.path === "/main") {
    return firstMenu.url
  }
})
export default router
