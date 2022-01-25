<template>
  <div>
    <el-form :model="phone" :rules="phoneRules" ref="phoneForm">
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
import { ElForm } from "element-plus/lib/components"
import { defineComponent, reactive, ref } from "vue"
import { useStore } from "vuex"
export default defineComponent({
  name: "phone",
  setup() {
    const store = useStore()
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
    const phoneForm = ref<InstanceType<typeof ElForm>>()
    const phoneValid = () => {
      phoneForm.value?.validate((valid) => {
        if (valid) {
          store.dispatch("loginStore/phoneAction", phone)
        }
      })
    }
    return {
      phone,
      phoneRules,
      phoneForm,
      phoneValid
    }
  }
})
</script>

<style scoped></style>
