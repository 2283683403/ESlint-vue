<template>
  <div class="login">
    <div class="Login-box">
      <h2>登录</h2>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="loginRules"
        class="demo-ruleForm"
      >
        <el-form-item prop="userName">
          <el-input
            prefix-icon="UserFilled"
            v-model="ruleForm.userName"
            placeholder="请输入用户名"
          />
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input
            prefix-icon="Edit"
            v-model="ruleForm.userPwd"
            show-password
            placeholder="请输入密码"
          />
        </el-form-item>
      </el-form>
      <div class="Login-btn">
        <el-button type="primary" @click="handleLoginSubmit(ruleFormRef)"
          >登录</el-button
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import User from '../../api/user'
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'
import router from '../../router'
const store = useStore()
const ruleForm = reactive({
  userName: 'admin',
  userPwd: '123456'
})

// 验证
const ruleFormRef = ref()
const loginRules = reactive({
  userName: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名不能为空'
    }
  ],
  userPwd: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 6, max: 6, message: '请输入六位数密码', trigger: 'blur' }
  ]
})

const handleLoginSubmit = (ruleFormRef) => {
  if (!ruleFormRef) return
  ruleFormRef.validate(async (valid) => {
    if (valid) {
      const aa = await User.login(ruleForm)
      console.log(aa)
      if (aa.code === 200) {
        ElMessage({
          message: '登录成功',
          type: 'success'
        })
        store.dispatch('user/getUser', aa.data)
        router.push('/')
      }
    } else {
      alert('登录失败')
    }
  })
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #ccc;
  background: url('/public/图.png') no-repeat;
  background-size: 100% 100%;
  .Login-box {
    padding: 50px;
    display: block;
    background-color: rgb(217, 212, 212);
    box-shadow: 0 0 10px 5px white;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    h2 {
      text-align: center;
      font-size: 32px;
    }
    .el-form {
      width: 400px;
      margin-top: 30px;
    }
    .Login-btn {
      width: 100%;
      font-size: 14px;
      button {
        width: 100%;
        height: 28px;
      }
    }
  }
}
</style>
