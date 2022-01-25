<template>
  <div>
    <el-form ref="accountForm" :model="account" :rules="accountRule">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { ElForm } from "element-plus"
export default defineComponent({
  setup() {
    const account = reactive({
      name: "",
      password: ""
    })
    const accountRule = {
      name: [
        {
          required: true,
          message: "请输入账号",
          trigger: "blur"
        },
        {
          pattern: /^[a-z0-9]{6,8}$/,
          message: "账号长度为6-8个字节",
          trigger: "blur"
        }
      ],
      password: [
        {
          required: true,
          message: "请输入密码",
          trigger: "blur"
        },
        {
          pattern: /^[a-z0-9]{6,8}$/,
          message: "密码长度为6-8个字节",
          trigger: "blur"
        }
      ]
    }
    const accountForm = ref<InstanceType<typeof ElForm>>()
    const accountValid = () => {
      accountForm.value?.validate((valid) => {
        console.log(valid)
      })
    }
    return {
      account,
      accountRule,
      accountValid,
      accountForm
    }
  }
})
</script>

<style scoped lang="less"></style>
