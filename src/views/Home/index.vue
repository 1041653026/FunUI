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
        color: #383535cc;
        box-sizing: border-box;
        padding-left: 4rem;
        padding-right: 4rem;
        overflow: auto;
        scrollbar-face-color:rgb(50, 230, 243);
        scrollbar-shadow-color:rgb(50, 230, 243);
        scrollbar-highlight-color:rgb(50, 230, 243);
        scrollbar-3dlight-color:rgb(50, 230, 243);
        scrollbar-darkshadow-color:blue;
        scrollbar-track-color:#F7F7F7;
        scrollbar-arrow-color:#666666;
        &::-webkit-scrollbar {
            width: .3vw;
        }
        /* 滚动槽 */
        &::-webkit-scrollbar-track {
            display: none;
        }
        /* 滚动条滑块 */
        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background: linear-gradient(to bottom, rgba(248, 230, 71, 0.5), rgb(50, 230, 243));
            -webkit-box-shadow: rgb(50, 230, 243);
        }
        &::-webkit-scrollbar-thumb:window-inactive {
            background: rgb(50, 230, 243);
        }
    }
    // background:red;
}
</style>
