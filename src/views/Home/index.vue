<template>
    <div class='home flexRow'>
        <div class="home-left">
            <Sider></Sider>
        </div>
        <div class="home-right">
            <div class="main">
                <router-view></router-view>
            </div>
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
    box-sizing: border-box;
    padding-left: 5vw;
    .main {
        width: 60vw;
        height: 100%;
        background-color: rgba(255,255,255,.85);
    }
    // background:red;
}
</style>
