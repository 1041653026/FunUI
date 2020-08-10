<template>
    <div class='home flexRow'>
        <div class="home-left">
            <Sider></Sider>
        </div>
        <div class="home-right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Sider from '@/components/Sider';

export default {
    name: 'Home',
    components: {
        Sider,
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
.home-left {
  height: 100%;
  width: 20vw;
}
.home-right {
  height: 100%;
  flex: 1;
//   background:red;
}
</style>
