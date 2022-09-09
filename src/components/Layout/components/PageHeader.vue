<template>
  <div class="page-header page-center">
    <div class="left-nav">
      <ul>
        <li><img src="@/assets/images/common/logo.png" alt="logo" /></li>
        <li v-for="nav in navs">{{ nav.name }}</li>
      </ul>
    </div>
    <div class="right-search">
      <div class="search-bar">
        <el-icon><i-ep-search /></el-icon>
      </div>
      <div class="user">登录/注册</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const navs = [
  {
    name: '首页',
    to: '/'
  },
  {
    name: '学术报告',
    to: '/'
  },
  {
    name: '学术专家',
    to: '/'
  },
  {
    name: '学术综述',
    to: '/'
  }
]
</script>

<style scoped lang="scss">
.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: $page-max-width;
  padding-left: 55px;
  font-weight: 500;
  color: #fff;
}

.left-nav {
  font-size: 18px;

  ul {
    display: flex;
    align-items: center;
  }

  li {
    padding: 0 21px;
    cursor: pointer;
    &.active {
      color: #f5a623;
    }
  }
}

.right-search {
  font-size: 20px;
  display: flex;
  .search-bar {
    display: flex;
    align-items: center;
    justify-content: end;
    width: 150px;
    height: 33px;
    padding: 0 10px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 7px;
    margin-right: 40px;
    box-sizing: border-box;
  }
}
</style>
