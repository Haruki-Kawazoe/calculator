function リセット () {
    basic.showString("Reset")
    Aの数 = 0
    Bの数 = 0
    和差積商 = 0
    記号の数 = 0
}
function 計算 () {
    if (記号の数 == 1) {
        basic.showNumber(Aの数 + Bの数)
        和差積商 = Aの数 + Bの数
        Aの数 = 和差積商
        Bの数 = 0
    } else if (記号の数 == 2) {
        basic.showNumber(Aの数 - Bの数)
        和差積商 = Aの数 - Bの数
        Aの数 = 和差積商
        Bの数 = 0
    } else if (記号の数 == 3) {
        basic.showNumber(Aの数 * Bの数)
        和差積商 = Aの数 * Bの数
        Aの数 = 和差積商
        Bの数 = 0
    } else if (記号の数 == 4) {
        basic.showNumber(Aの数 / Bの数)
        和差積商 = Aの数 / Bの数
        Aの数 = 和差積商
        Bの数 = 0
    }
}
function シリアル通信serial () {
    while (0 == 0) {
        serial.writeNumbers([
        input.lightLevel(),
        input.runningTime() * 10,
        input.compassHeading(),
        input.temperature()
        ])
    }
}
input.onButtonPressed(Button.A, function () {
    ボタンAが押された時()
})
input.onPinPressed(TouchPin.P2, function () {
    記号の数 += 1
    記号のLED()
})
serial.onDataReceived("serial", function () {
    シリアル通信serial()
})
input.onButtonPressed(Button.AB, function () {
    リセット()
})
input.onButtonPressed(Button.B, function () {
    ボタンBが押された時()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    計算()
    basic.pause(100)
    serial.writeNumber(和差積商)
})
function 記号のLED () {
    if (記号の数 == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (記号の数 == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (記号の数 == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (記号の数 == 4) {
        basic.showLeds(`
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            `)
    } else if (記号の数 == 5) {
        記号の数 = 1
    }
}
function ボタンAが押された時 () {
    Aの数 += 1
    basic.showNumber(Aの数)
}
function ボタンBが押された時 () {
    Bの数 += 1
    basic.showNumber(Bの数)
}
let 記号の数 = 0
let 和差積商 = 0
let Bの数 = 0
let Aの数 = 0
serial.redirectToUSB()
basic.showString("Calculator ")
