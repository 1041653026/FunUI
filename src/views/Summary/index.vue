<template>
    <div class='summary'>
        <div class="summary-title">
            <Title>
                项目概述
                <template slot='descript'>该项目主要用于记录曾经使用并封装过的ui组件，便于未来开发复用!</template>
            </Title>
        </div>
        <div class="summary-title">
            <Title>
                项目历程
                <template slot='descript'>记录该项目从构建到完成所用技术及构建顺序！</template>
            </Title>
        </div>
        <div class="summary-main">
            首先，该项目使用vue构建，当然是先创建vue项目，因为不涉及http请求及全局状态管理，所以就不需要集成axios和vuex了！<br/><br/>
            做好了准备工作，下一步干嘛呢？其实，我也没想好，但是作为一个项目，没有一个好看的logo是没有灵魂了，然后就出现了FunUI那几个大字，在左上角！
            用了文字阴影来制造个立体效果，颜色我自己配的，我看还挺顺眼的。<br/><br/>
            logo有了，下一步就是写一些花里呼哨的东西，搞了个自动切换的背景组件，组件中有个背景文件夹，直接将图片放进去就可以添加新背景图。这个其实是通过webpack
            读取背景文件夹实现的，所以在开发阶段可以方便新背景图的添加，生产阶段就不能这么做了。读取到图片后用canvas画上去，就OK了！<br/><br/>
            背景弄好后，再加了个粒子效果，看人家的博客上都有，我也要有，于是就有了现在看到的雪花，不用数了，是150片雪花，利用离屏渲染画到canvas上，位于元素最上层，
            并且通过css禁用鼠标事件，使鼠标事件可以传递进去。<br/><br/>
            现在这个项目已经有一些酷酷的感觉了，但是，我不能忘记我的初衷，不能让这花里呼哨的东西阻碍我的步伐，接下里再搞个侧边栏，定个主体展示部分，前期准备就可以了，
            剩下的工作就是写组件，写展示页面，这个项目就算构建完成了！呼，似乎并不是很难嘛!<br/><br/>
            最近看了vue3.0决定要将系统升级到vue3.0并且增加单元测试，算是用vue3.0做的第一个项目吧，希望一切顺利。<br/><br/>
        </div>
    </div>
</template>

<script>
import Title from '@/components/Title';

export default {
    name: 'Summary',
    components: {
        Title
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.summary {
    width: 100%;
    height: 100%;
    .summary-title {
        width: 100%;
        height: 14rem;
    }
    .summary-main {
        width: 100%;
        text-align: left;
        font-size: 1.8rem;
        box-sizing: border-box;
        padding-top: 2rem;
    }
}
</style>
