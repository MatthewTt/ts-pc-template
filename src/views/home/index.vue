<template>
  <div>
    <div @click="test">home</div>
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
}
</style>
