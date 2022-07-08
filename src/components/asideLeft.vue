<template>
  <div>
    <div class="logo">
      <img src="../../public/logo.png" alt="" />
      <span>Manager</span>
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#001529"
      class="el-menu-vertical-demo"
      :default-active="$route.path"
      text-color="#fff"
      :unique-opened="true"
      router
    >
      <!-- <asideLeftTwo
        v-for="item in store.getters.menu"
        :key="item"
        :data="item"
      ></asideLeftTwo> -->
      <el-sub-menu
        :index="item.path"
        v-for="(item, index) in store.getters.menu"
        :key="index"
      >
        <template #title>
          <el-icon><Grid /></el-icon>
          <span>{{ item.menuName }}</span>
        </template>
        <el-menu-item
          :index="it.path"
          v-for="(it, ind) in item.children"
          :key="ind"
        >
          {{ it.menuName }}
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import User from '../api/user'
// import asideLeftTwo from './asideLeftTwo.vue'
import { useStore } from 'vuex'
const store = useStore()

const menuList = async () => {
  const aa = await User.menu()
  store.dispatch('user/setMenu', aa.data)
  // console.log(store.getters.menu)
}
menuList()
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  font-size: 18px;
  height: 50px;
  color: #fff;
  img {
    margin: 0 16px;
    width: 32px;
    height: 32px;
  }
}
.el-menu {
  width: 100%;
  border: none;
  height: 100%;
}
</style>
