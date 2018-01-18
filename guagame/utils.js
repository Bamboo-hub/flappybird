var e = sel => document.querySelector(sel)

var log = console.log.bind(console)

var imageFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
}

// var rectIntersects = function(a, b) {
//     var o = a
//     if (b.y > o.y && b.y < o.y + o.h) {
//         if (b.x > o.x && b.x < o.x + o.w) {
//             return true
//         }
//     }
//     return false
// }

// 顾给的另一个碰撞检测函数
var rectIntersects = function(a, b) {
    var o = a
    if (b.y > o.y && b.y < o.y + o.h) {
        if (b.x > o.x && b.x < o.x + o.w) {
            return true
        }
        if (o.x < b.x + b.w && b.x + b.w < o.x + o.w) {
            return true
        }
    }
}
const randomBetween = function(start, end) {
    var r = Math.random() * (end - start + 1)
    return Math.floor(r + start)
}
