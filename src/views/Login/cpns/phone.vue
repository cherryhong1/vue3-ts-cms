<template>
  <div>
    <el-form :model="phone" :rules="phoneRules">
      <el-form-item prop="num" label="手机号">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>
      <el-form-item prop="code" label="验证码">
        <div class="flex flex-row">
          <el-input v-model="phone.code" class="mr-10px"></el-input>
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"

export default defineComponent({
  name: "phone",
  setup() {
    const phone = reactive({
      num: "",
      code: ""
    })
    const phoneRules = {
      num: [
        {
          required: true,
          message: "手机号不能为空",
          trigger: "blur"
        },
        {
          pattern:
            /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/,
          message: "请正确输入手机号",
          trigger: "blur"
        }
      ],
      code: [
        {
          required: true,
          message: "验证码不能为空",
          trigger: "blur"
        }
      ]
    }
    return {
      phone,
      phoneRules
    }
  }
})
</script>

<style scoped></style>
