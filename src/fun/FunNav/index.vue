<template>
    <div class="funNav flexRow">
        <div class="item-outer"><div class="item">导航列表</div></div>
        <div class="item-outer"><div class="item">导航列表</div></div>
        <div class="item-outer"><div class="item">导航列表</div></div>
        <div class="item-outer"><div class="item">导航列表</div></div>
        <div class="item-outer"><div class="item">导航列表</div></div>
        
    </div>
</template>

<script>
export default {
    name: 'FunNav'
}
</script>

<style lang="scss" scoped>
.funNav {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 2vh;
    // overflow: hidden;
    flex-direction: column;
    justify-content: flex-start;
    .item-outer {
        width: 100%;
        // overflow: hidden;
        .item {
            width: 150%;
            height: 3vw;
            transform: translate(-33.3333333333%);
            margin-bottom: 2vh;
            font-size: 1.5vw;
            text-align: center;
            line-height: 3vw;
            background-image: url('../../assets/img/nav.png');
            background-size: contain;
            transition: all .3s ease 0s;
            cursor: pointer;
            opacity: .8;
            &:hover {
                transform: translate(-28%) scale(1.2);
            }
        }
    }
    
}
</style>