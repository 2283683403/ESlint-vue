<template>
  <div>
    <el-row :gutter="24">
      <!-- 开关按钮 -->
      <el-col :span="0.1">
        <el-icon class="icons"><Fold /></el-icon>
        <!-- <el-icon class="icons"><Expand /></el-icon> -->
      </el-col>
      <!-- 面包屑 -->
      <el-col :span="21">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item
            ><a href="/">{{ pathName }}</a></el-breadcrumb-item
          >
        </el-breadcrumb>
      </el-col>
      <!--用户名 and 退出 -->
      <el-col :span="2">
        <div class="tc">
          <!-- <el-icon class="iconss"><Bell /></el-icon>
          <span class="userName">admin</span> -->
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <el-icon class="iconss"><Bell /></el-icon>
              <i class="userName">admin</i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>
                  邮箱: {{ store.getters.userEmail }}
                </el-dropdown-item>
                <el-dropdown-item command="goList">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()

// 计算属性
const pathName = computed(() => {
  return router.currentRoute.value.meta.title
})

// 点击按钮
const handleCommand = (command) => {
  switch (command) {
    case 'goList':
      layout()
      break
  }
}

// 退出登录
const layout = () => {
  store.dispatch('user/layout')
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.icons {
  display: inline-block;
  font-size: 18px;
  margin-top: 17px;
}
.el-breadcrumb {
  line-height: 50px;
}
.box {
  width: 100%;
  height: 100%;
  background-color: aqua;
}
.tc {
  cursor: pointer;
  display: inline-block;
}
.iconss {
  margin-left: 45px;
  display: inline-block;
  padding-top: 10px;
  vertical-align: center;
}
.userName {
  color: #409eff;
  font-size: 14px;
  margin-left: 10px;
}
.el-dropdown {
  margin-top: 6px;
}
</style>
