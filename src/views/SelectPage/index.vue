<template>
    <div class='select'>
        <div class="select-title">
            <Title>
                下拉框Select
                <template slot='descript'>自定义下拉框组件</template>
            </Title>
        </div>
        
    </div>
</template>

<script>
import Title from '@/components/Title';

export default {
    name: 'SelectPage',
    components: {
        Title
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.select {
    width: 100%;
    height: 100%;
    .select-title {
        width: 100%;
        height: 14rem;
    }
    .select-main {
        width: 100%;
        text-align: left;
        font-size: 1.8rem;
        box-sizing: border-box;
        padding-top: 2rem;
    }
}
</style>
