input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        jump()
    }
})
function jump () {
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        . # . # .
        # . . . #
        `)
}
