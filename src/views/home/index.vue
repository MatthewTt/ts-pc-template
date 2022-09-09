<template>
  <div>
    <el-button>刷</el-button>
    <div @click="test">热门报告</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { getTemplate } from '@/api'
import { onMounted } from 'vue'
const router = useRouter()
const test = () => {
  router.push('/test')
}
onMounted(async () => {
  const res = await getTemplate()
  console.log(res)
})
</script>

<style scoped>
div {
  margin: 20px;
  font-size: 26px;
}
</style>
