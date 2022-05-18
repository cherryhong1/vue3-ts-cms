import { IBreadcrumb } from "../base-ui/breadcrumb/src/type"
import { RouteRecordRaw } from "vue-router"
let firstMenu: any = null
export function mapMenu(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  const allRoute: RouteRecordRaw[] = []
  const routeFiles = require.context("../router/main", true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require("../router/main" + key.split(".")[1])
    allRoute.push(route.default)
  })
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoute.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)
  return routes
}
export function pathMatchMenus(
  userMenus: any[],
  currentPath: string,
  breadcrumb?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMatchMenus(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumb?.push({ name: menu.name })
        breadcrumb?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}
export function pathMatchBreadcrumb(userMenus: any[], currentPath: string) {
  const breadcrumb: IBreadcrumb[] = []
  pathMatchMenus(userMenus, currentPath, breadcrumb)
  return breadcrumb
}
export function userMenusToPermission(userMenus: any[]) {
  const permissionList: string[] = []
  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissionList.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)
  return permissionList
}
export { firstMenu }
