<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <asideLeft></asideLeft>
      </el-aside>
      <el-container>
        <el-header>
          <breadcrumb></breadcrumb>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import asideLeft from '../components/asideLeft.vue'
import breadcrumb from '../components/breadcrumb.vue'
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100%;
}
.el-aside {
  background-color: #001529;
  height: 100vh;
}
.el-header {
  height: 50px;
  border-bottom: 1px solid #ddd;
  align-items: center;
  line-height: 50px;
}
.el-main {
  background-color: #eef0f3;
}
</style>
