<template>
  <div id="app" class='flexRow'>
    <div class="bg">
      <Background></Background>
    </div>
    <div class="main">
      <router-view></router-view>
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
  },
  mounted() {
    this.resize();
    window.addEventListener('resize', this.resize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize);
  },
  methods: {
    resize() {
      let RATIO, _body = document.body || document.documentElement;
      if (_body.clientWidth / 1920 > _body.clientHeight / 1080) {
        RATIO = _body.clientHeight / 1080;
      } else {
        RATIO = _body.clientWidth / 1920;
      }
      document.documentElement.style.fontSize = 10 * RATIO + 'px';
      // document.documentElement.style.fontSize = 10 / 1080 * document.body.clientHeight + 'px';
    }
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
.main {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.snow {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  padding: 0;
  pointer-events: none;
  z-index: 999999999;
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
