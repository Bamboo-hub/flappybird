var enableDebugMode = function(game, enable) {
    if(!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function(event){
        var k = event.key
        if (k == 'p') {
            // 暂停功能
            window.paused = !window.paused
        } else if ('1234567'.includes(k)) {
            // 为了 debug 临时加的载入关卡功能log
            log('k', k)
            blocks = loadLevel(game, Number(k))
            log('blocks', blocks)
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function(event) {
        var input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })
}

var __main = function() {
    var images = {
        bg: 'img/bg_day.png',
        land: 'img/land.png',
        bird_0: 'img/bird0_0.png',
        bird_1: 'img/bird0_1.png',
        bird_2: 'img/bird0_2.png',
        title: 'img/title.png',
        pipe: 'img/pipe.png',
        font_0: 'img/font_0.png',
        font_1: 'img/font_1.png',
        font_2: 'img/font_2.png',
        font_3: 'img/font_3.png',
        font_4: 'img/font_4.png',
        font_5: 'img/font_5.png',
        font_6: 'img/font_6.png',
        font_7: 'img/font_7.png',
        font_8: 'img/font_8.png',
        font_9: 'img/font_9.png',
        medals_0: 'img/medals_0.png',
        medals_1: 'img/medals_1.png',
        medals_2: 'img/medals_2.png',
        medals_3: 'img/medals_3.png',
        score_panel: 'img/score_panel.png',
    }
    var game = GuaGame.instance(20, images, function(g){
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

__main()
