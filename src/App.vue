<template>
  <Layout />
</template>
<script setup lang="ts">
import Layout from '@/components/Layout/index.vue'

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>
<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.75s ease-out;
}

.slide-enter-to {
  position: absolute;
  right: 0;
}

.slide-enter-from {
  position: absolute;
  right: -100%;
}

.slide-leave-to {
  position: absolute;
  left: -100%;
}

.slide-leave-from {
  position: absolute;
  left: 0;
}
</style>
