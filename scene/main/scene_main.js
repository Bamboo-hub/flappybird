class SceneMain extends GuaScene {
    constructor(game) {
        super(game)
        this.bg = GuaImage.new(game, 'bg')
        this.addElement(this.bg)
        // 加入水管
        this.pipe = Pipes.new(game)
        this.addElement(this.pipe)
        // 加入草地
        this.land = GuaImage.new(game, 'land')
        this.land.y = 480
        this.addElement(this.land)
        this.skipCount = 5
        // 加入小鸟
        var b = GuaAnimation.new(game)
        b.x = 120
        b.y = 200
        this.bird = b
        this.bird.main = true
        this.addElement(b)
        // 游戏是否结束
        this.end = false
        this.setupInputs()
        // 加入分数
        var s = Score.new(game)
        this.score = s
        this.addElement(s)
        // this.scoreImg = GuaImage.new(game, 'font_0')
        // this.addElement(this.scoreImg)
    }
    draw() {
        super.draw()
    }
    update() {
        super.update()
        // 草地的滚动效果
        if (!this.end) {
            this.skipCount--
            var offset = -5
            if (this.skipCount == 0) {
                this.skipCount = 5
                offset = 20
            }
            this.land.x += offset
        }
        this.addScore()
        // 判断游戏是否结束
        var h = 455
        if (this.bird.y >= h) {
            // log('end')
            this.pipe.end = false
            this.bird.end = false
            this.end = true
            this.gameoverImg()
        }
        // 判断相撞
        var pipes = this.pipe.pipes
        for (var i = 0; i < pipes.length; i++) {
            var a = this.bird
            var b = pipes[i]
            // log(a, b)
            if (rectIntersects(a, b) || rectIntersects(b, a)) {
                // log('相撞')
                this.pipe.end = false
                this.bird.end = false
                this.end = true
                // var s = SceneEnd.new(this.game)
                // this.game.replaceScene(s)
            }
        }
    }
    addScore() {
        // 通过水管时让分数 + 1，并改变水管状态为已经得到分数
        var pipes = this.pipe.pipes
        for (var p of pipes) {
            if (p.x < 100 && p.score == false) {
                this.score.nowScore += 1
                p.score = true
            }
            // 水管重新回到右侧时将状态改为可获得分数的水管
            if (p.x > 400 && p.score == true) {
                p.score = false
            }
        }
    }
    gameoverImg() {
        // 游戏结束时加载的图片
        this.score_panel = GuaImage.new(this.game, 'score_panel')
        this.score_panel.x = 20
        this.score_panel.y = 200
        this.addElement(this.score_panel)
        // 根据分数判断加载哪种徽章
        var s = Math.floor(this.score.nowScore / 10)
        this.medals = GuaImage.new(this.game, `medals_${s}`)
        this.medals.x = 50
        this.medals.y = 243
        this.addElement(this.medals)
    }
    setupInputs() {
        var self = this
        var b = this.bird
        self.game.registerAction('j', function(){
            b.jump()
        })
    }
}
