input.onButtonPressed(Button.A, function () {
    if (サーボの回転速度 == 0) {
        サーボの回転速度 = 100
    } else if (サーボの回転速度 == 100) {
        サーボの回転速度 = 0
    } else if (サーボの回転速度 == -100) {
        サーボの回転速度 = 0
    }
})
input.onButtonPressed(Button.B, function () {
    サーボの回転速度 = -100
})
let サーボの回転速度 = 0
サーボの回転速度 = 0
basic.forever(function () {
    servos.P0.run(Math.map(input.lightLevel(), 0, 225, 50, 100))
})
