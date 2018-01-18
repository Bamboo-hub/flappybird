class Pipes {
    constructor(game) {
        this.game = game
        this.pipes = []
        this.pipeSpace = 110
        this.管子横向间距 = 200
        this.conlumsOfPipe = 3
        // 将水管图片添加到数组
        for (var i = 0; i < this.conlumsOfPipe; i++) {
            var p1 = GuaImage.new(game, "pipe")
            p1.flipY = true
            p1.x = 500 + i * 200
            p1.score = false
            var p2 = GuaImage.new(game, "pipe")
            p2.x = p1.x
            this.resetPipesPosition(p1, p2)
            this.pipes.push(p1)
            this.pipes.push(p2)
        }
        this.end = true
    }
    static new(game) {
        return new this(game)
    }
    resetPipesPosition(p1, p2) {
        p1.y = randomBetween(-200, 0)
        p2.y = p1.y + p1.h + this.pipeSpace
    }
    update() {
        // 水管向左侧移动的动画
        if (this.end) {
            for (var p of this.pipes) {
                p.x -= 5
                if (p.x < -100) {
                    p.x += this.管子横向间距 * this.conlumsOfPipe
                }
            }
        }
    }
    draw() {
        var context = this.game.context
        for (var p of this.pipes) {
            context.save()

            var w2 = p.w / 2
            var h2 = p.h / 2
            context.translate(p.x + w2, p.y + h2)
            var scaleX = p.flipX ? -1 : 1
            var scaleY = p.flipY ? -1 : 1
            context.scale(scaleX, scaleY)
            context.rotate(p.rotation * Math.PI / 180)
            context.translate(-w2, -h2)

            context.drawImage(p.texture, 0, 0)

            context.restore()
        }
    }
}
