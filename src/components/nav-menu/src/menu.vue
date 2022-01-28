<template>
  <div>
    <div class="h-50px flex justify-center items-center">
      <img src="~@/assets/img/logo1.png" alt="" class="w-150px" />
    </div>
    <el-menu
      default-active="39"
      class="el-menu-vertical-demo border-r-0"
      :collapse="collapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <i
                v-if="item.icon"
                :class="item.icon"
                class="el-icon text-blue-500"
              ></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item
                :index="subItem.id + ''"
                @click="handleMenuItem(subItem)"
              >
                <i v-if="subItem.icon" :class="subItem.icon"></i>
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "@/store/index"
import { useRouter } from "vue-router"
// import localCache from "@/utils/cache"
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    // const userMenus = localCache.getCache("userMenus")
    const userMenus = computed(() => store.state.loginStore.userMenus)
    const router = useRouter()
    const handleMenuItem = (item: any) => {
      console.log(item)
      router.push({
        path: item.url ?? "/no-found"
      })
    }
    return {
      userMenus,
      handleOpen,
      handleClose,
      handleMenuItem
    }
  }
})
</script>

<style scoped lang="less">
.el-menu {
  border-right: 0;
}
</style>
