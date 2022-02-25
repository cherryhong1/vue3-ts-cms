<template>
  <div class="login h-full flex justify-center items-center flex-col">
    <h1 class="text-4xl text-white leading-26">后台管理系统  </h1>
    <div class="w-300px">
      <el-tabs type="border-card" class="w-full" stretch v-model="activeTab">
        <el-tab-pane name="account">
          <template #label>
            <span class="flex justify-center items-center">
              <el-icon size="18" class="mr-3px"><avatar /></el-icon>账户登录
            </span>
          </template>
          <account-vue ref="accountRef"></account-vue>
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <span class="flex justify-center items-center">
              <el-icon size="18" class="mr-3px"><iphone /></el-icon>手机号登录
            </span>
          </template>
          <phoneVue ref="phoneRef"></phoneVue>
        </el-tab-pane>
      </el-tabs>
      <el-row justify="space-between" class="w-full mb-5px">
        <el-checkbox label="记住密码" v-model="isRememberPwd"></el-checkbox>
        <el-link type="primary">忘记密码</el-link>
      </el-row>
      <el-button type="primary" class="w-full" @click="handleLogin"
        >登录</el-button
      >
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue"
import accountVue from "./cpns/account.vue"
import phoneVue from "./cpns/phone.vue"
export default defineComponent({
  setup() {
    const isRememberPwd = ref(true)
    const accountRef = ref<InstanceType<typeof accountVue>>()
    const phoneRef = ref<InstanceType<typeof phoneVue>>()
    const activeTab = ref("account")
    const handleLogin = () => {
      if (activeTab.value === "account") {
        accountRef.value?.accountValid(isRememberPwd.value)
      } else if (activeTab.value === "phone") phoneRef.value?.phoneValid()
    }
    return {
      isRememberPwd,
      accountRef,
      phoneRef,
      activeTab,
      handleLogin
    }
  },
  components: {
    accountVue,
    phoneVue
  }
})
</script>

<style lang="less" scoped>
.login {
  background: url("../../assets/img/bg-login.jpeg") center;
  background-size: cover;
}
</style>
