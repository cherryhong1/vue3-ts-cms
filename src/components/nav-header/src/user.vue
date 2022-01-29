<template>
  <div class="flex items-center">
    <el-icon class="mr-20px" size="26px"><chat-line-square /></el-icon>
    <el-icon class="mr-20px" size="26px"><notification /></el-icon>
    <el-dropdown class="flex">
      <div class="flex items-center">
        <span class="el-dropdown-link mr-5px">
          <el-avatar :size="26" :src="circleUrl"></el-avatar>
        </span>
        {{ userName }}
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"
import { useStore } from "@/store"
export default defineComponent({
  setup() {
    const store = useStore()
    const circleUrl = ref(
      "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    )
    const userName = computed(() => {
      return store.state.loginStore.userInfo.realname
    })
    console.log(userName.value)
    return {
      circleUrl,
      userName
    }
  }
})
</script>

<style scoped></style>
