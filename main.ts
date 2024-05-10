input.onButtonPressed(Button.A, function () {
    pontos = 9
    cronometro = true
})
input.onButtonPressed(Button.B, function () {
    cronometro = false
})
let cronometro = false
let pontos = 0
pontos = 9
basic.forever(function () {
    if (cronometro == true) {
        pontos += -1
        basic.pause(1000)
        basic.showNumber(pontos)
    }
    if (pontos == 0) {
        cronometro = false
        basic.showIcon(IconNames.No)
        music.playMelody("C5 B A G F E D C ", 120)
        pontos = 9
    }
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        cronometro = false
        basic.showIcon(IconNames.No)
        music.playMelody("C5 B A G F E D C ", 120)
    }
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P2)) {
        cronometro = false
        basic.showNumber(pontos)
        soundExpression.happy.playUntilDone()
    }
})
