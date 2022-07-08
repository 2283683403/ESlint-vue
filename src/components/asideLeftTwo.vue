<template>
  <template v-if="item && !item.children">
    <el-menu-item :index="item.path">
      {{ item.menuName }}
    </el-menu-item>
  </template>

  <template v-if="item && item.children && item.children.length > 0">
    <el-sub-menu :index="item.path">
      <template #title>
        <span>{{ item.menuName }}</span>
      </template>
      <asideLeftTwo
        v-for="it in item.children"
        :key="it"
        :data="it"
      ></asideLeftTwo>
    </el-sub-menu>
  </template>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => {}
  }
})
// eslint-disable-next-line vue/no-setup-props-destructure
const item = props.data
console.log(item)
</script>

<style lang="scss" scoped></style>
