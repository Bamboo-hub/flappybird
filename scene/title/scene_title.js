class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        this.bg = GuaImage.new(game, 'bg')
        this.addElement(this.bg)
        // 草地
        this.land = GuaImage.new(game, 'land')
        this.land.y = 480
        this.addElement(this.land)
        this.skipCount = 5
        // 标题图片
        this.title = GuaImage.new(game, 'title')
        this.title.x = 50
        this.title.y = 100
        this.addElement(this.title)
        // 小鸟
        var b = GuaAnimation.new(game)
        b.x = 120
        b.y = 200
        this.bird = b
        this.rotation = b.rotation
        this.vy = b.vy
        this.gy = b.gy
        this.addElement(b)
        this.setupInputs()
    }
    draw() {
        // draw labels
        super.draw()
        this.game.context.fillText('按下字母 J 开始游戏并跳跃', 70, 290)
    }
    update() {
        super.update()
        // 草地的滚动效果
        this.skipCount--
        var offset = -5
        if (this.skipCount == 0) {
            this.skipCount = 5
            offset = 20
        }
        this.land.x += offset
        this.rotation = 0
        this.vy = 0
        this.gy = 0
    }
    setupInputs() {
        var self = this
        var b = this.bird
        self.game.registerAction('j', function(){
            var s = SceneMain.new(self.game)
            self.game.replaceScene(s)
        })
    }
}
