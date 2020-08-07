<template>
  <div id="app" class='flexRow'>
    <div class="bg">
      <Background></Background>
    </div>
    <div class="snow">
      <Snow></Snow>
    </div>
    <!-- <div class="app-left">
      <Sider></Sider>
    </div>
    <div class="app-right">
      <router-view></router-view>
    </div> -->
  </div>
</template>

<script>
import Sider from '@/components/Sider';
import Background from '@/components/Background';
import Snow from '@/components/Snow';

export default {
  components: {
    Sider,
    Background,
    Snow
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
.bg {
  width: 100%;
  height: 100%;
}
.snow {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  padding: 0;
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
