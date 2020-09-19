<template>
    <div class="snow" ref='snow'>
        <canvas class='ctx' ref='ctx'>抱歉，您的浏览器暂不支持canvas！请切换到高级浏览器！</canvas>
    </div>
</template>

<script>
export default {
    name: 'Snow',
    data() {
        return {
            ctx: null,              // 画笔
            timer: null,            // 计时器
            snowList: [],           // 雪花数组
            num: 0,                 // 计数器
            canvas: null,           // 离屏渲染canvas

            size: 50                // 雪花大小
        }
    },
    mounted() {
        this.ctx = this.$refs.ctx.getContext('2d');
        let size = this.$refs.snow.getBoundingClientRect();
        this.$refs.ctx.width = size.width;
        this.$refs.ctx.height = size.height;
        this.loadImg();
        this.keepChange();
        window.addEventListener('resize', this.changeCanvas);
    },
    beforeDestroy() {
        this.breakKeepChange();
        window.removeEventListener('resize', this.changeCanvas);
    },
    methods: {
        changeCanvas() {
            let RATIO, _body = document.body || document.documentElement;
            if (_body.clientWidth / 1920 > _body.clientHeight / 1080) {
                RATIO = _body.clientHeight / 1080;
            } else {
                RATIO = _body.clientWidth / 1920;
            }
            this.$refs.ctx.width = _body.clientWidth;
            this.$refs.ctx.height = _body.clientHeight;
            this.size = 50 * RATIO;
        },
        loadImg() {
            let canvas = document.createElement('canvas');
            let cvs = canvas.getContext('2d');
            let img = new Image();
            img.src = require('@/assets/img/snow.png');
            this.curImg++;
            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                cvs.drawImage(img, 0, 0, canvas.width, canvas.height);
                this.canvas = canvas;
                this.initSnow();
            }
        },
        initSnow() {
            let width = this.$refs.ctx.width;
            let height = this.$refs.ctx.height;
            this.size = 50 / 1920 * width;
            for (let i = 0; i < 150; i++) {
                this.createSnow(this.canvas, width, height);
            }
        },
        createSnow(canvas, width, height, top) {
            let data = {
                x: Math.random() * width,
                y: Math.random() * height,
                dir: Math.random() - 0.5 > 0 ? 1 : -1,
                speed: Math.ceil(Math.random() * 3)
            }
            top && (data.y = -this.size);
            this.ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, data.x, data.y, this.size,this.size);
            this.snowList.push(data);
        },
        play() {
            this.ctx.clearRect(0, 0, this.$refs.ctx.width, this.$refs.ctx.height);
            this.num++;
            this.snowList.forEach((item, i) => {
                this.$set(item, 'x', item.x + item.speed * Math.sin((this.num + i *2) / 100) * item.dir);
                this.$set(item, 'y', item.y + item.speed);
                if (item.x > this.$refs.ctx.width || item.x < -this.size) {
                    this.snowList.splice(i, 1);
                    this.createSnow(this.canvas, this.$refs.ctx.width, this.$refs.ctx.height, true);
                }
                if (item.y > this.$refs.ctx.height) {
                    this.snowList.splice(i, 1);
                    this.createSnow(this.canvas, this.$refs.ctx.width, this.$refs.ctx.height, true);
                }
                this.ctx.drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height, item.x, item.y, this.size,this.size);
            })
            
        },
        keepChange() {
            this.timer = setInterval(() => {
                this.play();
            }, 30);
        },
        breakKeepChange() {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
}
</script>

<style lang='scss' scoped>
.snow {
    width: 100%;
    height: 100%;
    pointer-events: none;
    .ctx {
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
}
</style>