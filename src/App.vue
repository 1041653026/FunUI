<template>
  <div id="app" class='flexRow'>
    <div class="app-left">
      <Sider></Sider>
    </div>
    <div class="app-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sider from '@/components/Sider';

export default {
  components: {
    Sider
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.app-left {
  height: 100%;
  flex: 1;
}
.app-right {
  height: 100%;
  flex: 5;
  background:red;
}
</style>
