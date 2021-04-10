radio.onReceivedNumber(function (receivedNumber) {
    if (hand > 0) {
        radio.sendNumber(hand)
        if (hand == 1 && receivedNumber == 3) {
            game.addScore(1)
        } else if (hand == 2 && receivedNumber == 1) {
            game.addScore(1)
        } else if (hand == 3 && receivedNumber == 2) {
            game.addScore(1)
        }
        hand = 0
        basic.pause(2000)
        basic.showNumber(game.score())
    }
})
input.onButtonPressed(Button.A, function () {
    if (hand == 0) {
        hand = randint(1, 3)
        if (hand == 1) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        }
        if (hand == 2) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        }
        if (hand == 3) {
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
        }
        radio.sendNumber(hand)
    }
})
input.onButtonPressed(Button.B, function () {
    game.setScore(0)
    basic.showNumber(game.score())
})
let hand = 0
radio.setGroup(123)
hand = 0
