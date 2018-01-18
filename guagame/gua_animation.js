class GuaAnimation {
    constructor(game) {
        this.game = game
        // this.frames = []
        this.animations = {
            idle: [],
        }
        for (var i = 0; i < 3; i++) {
            var name = `bird_${i}`
            var t = game.textureByName(name)
            // this.frames.push(t)
            this.animations['idle'].push(t)
        }
        // this.texture = this.frames[0]
        this.animationName = 'idle'
        this.texture = this.frames()[0]
        this.w = this.texture.width
        this.h = this.texture.height
        this.frameIndex = 0
        this.frameCount = 3
        //
        this.flipX = false
        this.rotation = 0
        // 重力和加速度
        this.gy = 10
        this.vy = 0
        this.main = false
        this.end = true
    }
    static new(game) {
        return new this(game)
    }
    frames() {
        return this.animations[this.animationName]
    }
    draw() {
        var context = this.game.context
        context.save()

        var w2 = this.w / 2
        var h2 = this.h / 2
        context.translate(this.x + w2, this.y + h2)
        if (this.flipX) {
            context.scale(-1, 1)
        }
        context.rotate(this.rotation * Math.PI / 180)
        context.translate(-w2, -h2)

        context.drawImage(this.texture, 0, 0)

        context.restore()
    }
    jump() {
        if (this.end) {
            this.vy = -10
            this.rotation = -45
        }
    }
    update() {
        if (this.main) {
            // 更新受力
            this.y += this.vy
            this.vy += this.gy * 0.2
            var h = 455
            if (this.y > h) {
                this.y = h
            }
            // 更新角度
            if (this.rotation < 90) {
                this.rotation += 5
            }
        }
        // 动画换帧
        if (this.end) {
            this.frameCount--
            if (this.frameCount == 0) {
                this.frameCount = 3
                this.frameIndex = (this.frameIndex + 1) % this.frames().length
                this.texture = this.frames()[this.frameIndex]
            }
        }
    }
}
