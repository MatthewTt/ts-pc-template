<template>
  <div class="common-layout">
    <el-container>
      <el-header height="66px"> </el-header>
      <el-main>
        <router-view v-slot="{ Component }">
          <transition name="fade-slide">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
.common-layout {
  position: relative;
  overflow-x: hidden;
  .el-container {
    height: 100vh;
  }
  .el-header {
    background-color: #1e218a;
  }
}
</style>
