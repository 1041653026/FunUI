<template>
    <div class="bg">
        <canvas class='ctx' ref='ctx'>抱歉，您的浏览器暂不支持canvas！请切换到高级浏览器！</canvas>
    </div>
</template>

<script>
// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./Image', true, /\..*$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const bgArr = [];
const modules = modulesFiles.keys().forEach(modulePath => {
    // set './app.js' => 'app'
    const moduleName = require('./Image/' + modulePath.replace(/^\.\/(.*\.\w+)$/, '$1'));
    bgArr.push(moduleName);
});
export default {
    name: 'Background',
    data() {
        return {
            ctx: null,
            curImg: 0,
            timer: null,
            history: []
        }
    },
    mounted() {
        this.ctx = this.$refs.ctx.getContext('2d');
        this.loadImg();
        this.keepChange();
    },
    beforeDestroy() {
        this.breakKeepChange();
    },
    methods: {
        loadImg() {
            let img = new Image();
            if (this.history.length < bgArr.length) {
                img.src = bgArr[this.curImg % bgArr.length];
                this.curImg++;
                img.onload = () => {
                    this.history.push(img);
                    this.$refs.ctx.width = img.width;
                    this.$refs.ctx.height = img.height;
                    this.drawImg(img);
                }
            } else {
                this.drawImg(this.history[this.curImg % bgArr.length]);
                this.curImg++;
            }
        },
        drawImg(img) {
            this.ctx.clearRect(0, 0, this.$refs.ctx.width, this.$refs.ctx.height);
            try {
                this.ctx.drawImage(img, 0, 0, this.$refs.ctx.width, this.$refs.ctx.height);
            } catch(e) {
                console.log(e);
            }
        },
        keepChange() {
            this.timer = setInterval(() => {
                this.loadImg();
            }, 10000);
        },
        breakKeepChange() {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
}
</script>

<style lang='scss' scoped>
.bg {
    width: 100%;
    height: 100%;
    opacity: .8;
    .ctx {
        width: 100%;
        height: 100%;
    }
}
</style>