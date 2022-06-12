input.onButtonPressed(Button.A, function () {
    Aの数 += 1
    basic.showNumber(Aの数)
})
input.onPinPressed(TouchPin.P2, function () {
    記号の数 += 1
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
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Reset")
    Aの数 = 0
    Bの数 = 0
    和差積商 = 0
    記号の数 = 0
})
input.onButtonPressed(Button.B, function () {
    Bの数 += 1
    basic.showNumber(Bの数)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
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
})
let 和差積商 = 0
let Bの数 = 0
let 記号の数 = 0
let Aの数 = 0
basic.showString("Calculator ")
