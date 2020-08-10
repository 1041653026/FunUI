<template>
    <div class="sider flexRow">
        <div class="logo flexRow">
            <h1>FunUI</h1>
            <p>Style record library</p>
        </div>
        <div class="main">
            <fun-nav></fun-nav>
        </div>
    </div>
</template>

<script>
import FunNav from '@/fun/FunNav';

export default {
    name: 'Sider',
    components: {
        FunNav
    },
    data() {
        return {
            navList: [{
                label: '张三',
                value: '/zhangsan'
            }, {
                label: '李四',
                value: '/lisi'
            }, {
                label: '王二',
                value: '/wanger'
            }, {
                label: '史大',
                value: '/shida'
            }]
        }
    },
}
</script>

<style lang='scss' scoped>
.sider {
    width: 100%;
    height: 100%;
    flex-direction: column;
    box-sizing: border-box;
    padding-top: 2rem;
    user-select:none;
    .logo {
        flex: 1;
        width: 100%;
        font-family: Georgia, serif;
        flex-direction: column;
        h1 {
            flex: 1;
            width: 100%;
            margin: 0;
            text-align: left;
            font-size: 5rem;
            font-style: italic;
            box-sizing: border-box;
            padding-left: 2rem;
            color: #3A9CDB;
            text-shadow: 1px 1px 1px rgb(50, 230, 243), 2px 2px 1px rgb(50, 230, 243), 3px 3px 1px rgb(50, 230, 243), 4px 4px 1px rgb(50, 230, 243), 5px 5px 1px rgb(50, 230, 243);
        }
        p {
            flex: 1;
            width: 100%;
            margin: 0;
            font-size: 2rem;
            font-style: italic;
            box-sizing: border-box;
            padding-right: 2rem;
            text-align: right;
            color: #3A9CDB;
            text-shadow: 1px 1px 1px rgb(29, 224, 238), 2px 2px 1px rgb(26, 224, 238), 3px 3px 1px rgb(50, 230, 243);
        }
    }
    .main {
        flex: 9;
        width: 100%;
        // background-color: yellow;
    }
}
</style>