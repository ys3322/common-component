<template>
  <div id="app">
    <div class="nav-list">
      <router-link to="/">/</router-link>
      <router-link to="/tree">tree</router-link>
      <router-link to="/dynamic">dynamic</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100vh;
}
.nav-list {
  height: 56px;
  line-height: 56px;
  padding: 0 120px;
  background-color: #f1f1f1;
  a {
    padding: 6px 20px;
    &.router-link-exact-active {
      background-color: tomato;
      font-weight: 600;
    }
  }
}
.content {
  height: calc(100vh - 56px);
}
</style>
