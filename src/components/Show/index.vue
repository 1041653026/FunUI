<template>
    <div class='showPart'>
        <main class='main'>
            <slot name='main'></slot>
        </main>
        <div :class="{bottom: true, sticky_bottom: supportSticky}">
            <section class='code' ref='code'>
                <slot name='code'></slot>
            </section>
            <footer :class='{footer: true, activeFooter: isShowCode, sticky_footer: supportSticky}' @click='changeShow'>
                <span class="triangle"></span>
                <p class="guide">{{guide}}</p>
            </footer>
        </div>
        
    </div>
</template>

<script>
/***
 * @codeHeight    String     code部分高度，用于过渡动画
 */
export default {
    name: 'Show',
    props: {
        codeHeight: {
            type: String,
            default: '0'
        }
    },
    data() {
        return {
            isShowCode: false,           // 是否显示代码
            guide: '显示代码',            // 显示/隐藏代码
            supportSticky: false        // 是否支持sticky粘性定位
        }
    },
    mounted() {
        this.testSticky();
    },
    methods: {
        testSticky() {
            let body = document.body || document.documentElement;
            body.style.position = 'sticky';
            let _style = getComputedStyle(body) || body.currentStyle;
            this.supportSticky = _style.position === 'sticky';
        },
        changeShow() {
            this.isShowCode = !this.isShowCode;
            if (this.isShowCode) {
                this.$refs.code.style.height = this.codeHeight;
                this.guide = '隐藏代码';
            } else {
                this.$refs.code.style.height = 0;
                this.guide = '显示代码';
            }
        }
    }
}
</script>

<style lang='scss' scoped>
.showPart {
    width: 100%;
    border: 0.1rem solid #ccc;
    box-shadow: 0 0 .3rem rgba(0,0,0,.1);
    font-size: 1.6rem;
    .main {
        width: 100%;
        box-sizing: border-box;
        padding: 2rem;
        text-align: left;
        border-bottom: 1px solid #ccc;
        background: rgba(255,255,255, .8);
        overflow: hidden;
    }
    .bottom {
        position: relative;
        padding-bottom: 5rem;
        &.sticky_bottom {
            padding-bottom: 0;
        }
        .code {
            width: 100%;
            height: 0;
            overflow: hidden;
            transition: all .3s ease-out 0s;
            &:hover+.footer {
                .triangle {
                    transform: translate(-3rem, -72%) rotate(180deg);
                }
                .guide {
                    opacity: 1;
                    transform: translate(0%, -50%);
                }
            }
        }
        .footer {
            width: 100%;
            height: 5rem;
            background: rgba(255,255,255, .8);
            transition: all .3s ease 0s;
            cursor: pointer;
            position: absolute;
            bottom: 0;
            &.sticky_footer {
                position: sticky;
            }
            .triangle {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -27%);
                width: 0;
                height: 0;
                border: 0.9rem solid transparent;
                border-top-color: #ccc;
                transition: all .3s ease 0s;
            }
            .guide {
                margin: 0;
                padding: 0;
                color: #ccc;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(40%, -50%);
                opacity: 0;
                transition: all .3s ease 0s;
            }
            &:hover {
                background: rgba(243, 243, 243, 0.808);
                .triangle {
                    border-top-color: #3A9CDB;
                    transform: translate(-3rem, -27%);
                }
                .guide {
                    opacity: 1 !important;
                    transform: translate(0%, -50%);
                    color: #3A9CDB;
                }
            }
            &.activeFooter {
                border-top: 1px solid #ccc;
                .triangle {
                    transform: translate(-50%, -72%) rotate(180deg);
                }
                &:hover {
                    .triangle {
                        transform: translate(-3rem, -72%) rotate(180deg);
                    }
                }
            }
        }
    }
    
}
</style>