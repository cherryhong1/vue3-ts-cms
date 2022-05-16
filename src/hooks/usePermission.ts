import { useStore } from "@/store"
export function usePermission(pathName: string, handleName: string) {
  const store = useStore()
  const permissions = store.state.loginStore.permissions
  const vertify = `system:${pathName}:${handleName}`
  return !!permissions.find((item) => item === vertify)
}
