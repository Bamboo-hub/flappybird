class Score {
    constructor(game) {
        this.game = game
        this.nowScore = 0
    }
    static new(game) {
        return new this(game)
    }
    update() {

    }
    draw() {
        var name = `font_${this.nowScore}`
        this.scoreImg = GuaImage.new(this.game, name)
        var context = this.game.context
        context.drawImage(this.scoreImg.texture, 120, 100)
    }
}
