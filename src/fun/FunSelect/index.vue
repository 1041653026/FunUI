<template>
    <div class='select-outer' @click='open'>
        <div v-if='filter' ref='selectMain' :class='{"select-main": true, selectDisabled: disabled}' :style='{paddingRight: "3.2rem"}'>
            <input class='filter-input' type='text' :value='myValue' :disabled='disabled' @input='myFilter' />
            <i class='select-filter-clear' v-show='!disabled' @click='selectClear'>×</i>
        </div>
        <div v-else :class='{"select-main": true, selectDisabled: disabled}' ref='selectMain'>{{myValue}}</div>
        <div :class='{"select-triangle": true, triangleDisabled: disabled}'>
            <span class='triangle-inner'></span>
        </div>
        <div class='select-options' data-val='dont_touch_me' :style='{height: active ? "15.6rem" : 0}' @click='mySelect'>
            <div v-for='(item, i) in myList' :data-val='item' :key='i'>{{item}}</div>
        </div>
    </div>
</template>

<script>
/***
 * @defaultValue 默认选定的值
 * @ListData     选择器数据[{label: '', value: ''}]
 * @onSelect     选择方法
 * @filter       是否支持模糊匹配
 * @disabled     是否禁止选择
 */
export default {
    name: 'FunSelect',
    props: {
        defaultValue: {
            default: '点击选择选项'
        },
        listData: {
            type: Array,
            default: () => []
        },
        filter: {
            type: Boolean,
            default: false
        },
        onSelect: {
            type: Function,
            default: () => {}
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            active: false,                        // 控制下拉框的显隐
            filterVal: '',                        // 模糊匹配的值
            myValue: '点击选择选项',               // 选中的值
            myList: []                            // 列表数据
        }
    },
    created() {
        this.getDefaultValue();
        document.addEventListener('click', this.docClick, true);
    },
    beforeDestroy () {
        document.removeEventListener('click', this.docClick);
    },
    methods: {
        getDefaultValue() {
            let defaultValue;
            this.listData && this.listData.forEach(item => {
                if (item.value == this.defaultValue) {
                    defaultValue = item.label;
                }
            });
            if (!defaultValue) {
                defaultValue = this.defaultValue ? this.defaultValue : '点击选择选项';
            }
            this.myValue = defaultValue;
            this.myList = this.listData;
        },
        docClick(e) {
            if (e.target === this.$refs.selectMain) return;
            if (this.filter && this.active) return;
            this.active = false;
        },
        open() {
            if ((this.filter && this.active) || this.disabled) return;
            this.active = !this.active;
        },
        mySelect(e) {
            let val = e.target.getAttribute('data-val');
            e.stopPropagation && e.stopPropagation();
            e.cancelBubble = true;
            if (val === 'dont_touch_me') {
                return;
            }
            this.myValue = e.target.innerHTML;
            this.onSelect(val);
            if (this.filter) {
                this.active = false;
            }
        },
        myFilter(e) {
            this.filterVal = e.target.value;
            this.myValue = e.target.value;
            console.log(e.target.value)
        },
        selectClear() {
            if (this.disabled) return;
            this.myValue = '';
            this.filterVal = '';
        }
    },
    watch: {
        filterVal() {
            let listData;
            if (this.filter) {
                listData = this.listData.filter(item => {
                    return (item.label + '').indexOf(this.filterVal) > -1;
                });
            }
            if (!listData.length) {
                listData = [];
            }
            this.myList = listData;
        },
        // 数据列表listData和defaultValue应联动变化，如果只是数据列表变化defaultValue不会跟着变化
        listData() {
            this.getDefaultValue();
        }
    }
}
</script>

<style lang="scss" scoped>
.select-outer {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding: 0.24rem 0.08rem 0.08rem 0;
    background-image: url('./kuang.png');
    background-size: 100% 100%;
    transition: all .3s linear 0s;
    cursor: pointer;
    &:hover {
        border-color: red;
        .select-main {
            .select-filter-clear {
                opacity: 1;
            }
        }
    }
    .select-main {
        flex: 1;
        box-sizing: border-box;
        padding-left: 1.6rem;
        font-size: 2.2rem;
        font-weight: 300;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        position: relative;
        .filter-input {
            width: 100%;
            height: 100%;
            background:none;  
            outline:none;  
            border:none;
            min-width: 0;
            color: #fff;
            &:focus {
                border:none;
            }
        }
        .select-filter-clear {
            width: 2rem;
            height: 2rem;
            line-height: 1.8rem;
            font-size: 1.5rem;
            font-style: normal;
            border-radius: 50%;
            font-weight: 600;
            box-sizing: border-box;
            background-color: rgba(54, 123, 167, 0.5);
            color: #fff;
            position: absolute;
            right: 0.5rem;
            top: 1.35rem;
            text-align: center;
            z-index: 20;
            transition: all .5s linear 0s;
            opacity: 0;
            &:hover {
                background-color: rgba(58, 156, 219, 1);
            }
        }
        &.selectDisabled {
            background: rgba(150,150,150,.3);
            cursor: not-allowed;
            .filter-input {
                cursor: not-allowed;
            }
        }
    }
    .select-triangle {
        width: 2.9rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(54, 123, 167, 0.5);
        border-top-right-radius: 0.08rem;
        border-bottom-right-radius: 0.08rem;
        .triangle-inner {
            transform: translateY(0.25rem);
            border: 0.5rem solid transparent;
            border-top-color: rgba(58, 156, 219, 1);
            transform-origin: 0.5rem 0.35rem;
            transition: all .2s linear 0s;
        }
        &.select-triangle {
            cursor: not-allowed;
        }
    }
    .select-options {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 0;
        transition: all .3s ease 0s;
        box-sizing: border-box;
        text-align: left;
        padding: 0 0.1rem 0 0.2rem;
        overflow: auto;
        background-image: url('../../assets/img/option_bg.png');
        background-size: cover;
        z-index: 400;
        /* 去滚动条兼容 */
        scrollbar-width: none;
        -ms-scroll-chaining: chained;
        -ms-overflow-style: none;
        -ms-content-zooming: zoom;
        -ms-scroll-rails: none;
        -ms-content-zoom-limit-min: 100%;
        -ms-content-zoom-limit-max: 500%;
        -ms-scroll-snap-type: proximity;
        -ms-scroll-snap-points-x: snapList(100%, 200%, 300%, 400%, 500%);
        -ms-overflow-style: none;
        /* webkit内核浏览器去滚动条 */
        &::-webkit-scrollbar {
            display:none;
            width: 0;
            opacity: 0;
        }
        &::before {
            content: '';
            display: block;
            width: 100%;
            height: 0.2rem;
        }
        div {
            width: 100%;
            height: 3.85rem;
            line-height: 3.85rem;
            box-sizing: border-box;
            padding-left: 1.6rem;
            font-size: 2.2rem;
            font-weight: 300;
            &:hover {
            background-color: rgba(17, 80, 156, 0.9);
            }
        }
    }
}
</style>