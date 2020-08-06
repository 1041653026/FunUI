<template>
    <div class="sider flexRow">
        <div class="logo">
            FunUI
        </div>
        <div class="main">

        </div>
    </div>
</template>

<script>
export default {
    name: 'Sider'
}
</script>

<style lang='scss' scoped>
.sider {
    width: 100%;
    height: 100%;
    flex-direction: column;
    .logo {
        flex: 1;
        width: 100%;
        font-family: Georgia, serif;
        font-size: 5rem;
        font-style: italic;
        color: #3A9CDB;
        text-shadow: 1px 1px 1px rgb(50, 230, 243), 2px 2px 1px rgb(50, 230, 243), 3px 3px 1px rgb(50, 230, 243), 4px 4px 1px rgb(50, 230, 243), 5px 5px 1px rgb(50, 230, 243);
    }
    .main {
        flex: 9;
        width: 100%;
        background-color: yellow;
    }
}
</style>