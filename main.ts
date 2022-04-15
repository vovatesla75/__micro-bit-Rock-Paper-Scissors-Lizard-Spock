let bot_choise = 0
let player_choise = 0
// 0 - rock
// 
// 1 - paper
// 
// 2 - scissors
// 
// 3 - spock
// 
// 4 - lizard
function choise () {
    if (bot_choise == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (bot_choise == 1) {
        basic.showIcon(IconNames.Square)
    } else if (bot_choise == 2) {
        basic.showIcon(IconNames.Scissors)
    } else if (bot_choise == 3) {
        basic.showLeds(`
            # # . # #
            # # . # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (bot_choise == 4) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # . . .
            # # # # #
            # # # # #
            `)
    }
}
input.onPinReleased(TouchPin.P0, function () {
    player_choise = 4
    // lizard
    basic.showLeds(`
        # # # # #
        # # # # #
        # # . . .
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    player_choise = 0
    // rock
    basic.showIcon(IconNames.SmallSquare)
})
input.onButtonPressed(Button.AB, function () {
    player_choise = 2
    // scissors
    basic.showIcon(IconNames.Scissors)
})
input.onButtonPressed(Button.B, function () {
    player_choise = 1
    // paper
    basic.showIcon(IconNames.Square)
})
input.onPinReleased(TouchPin.P1, function () {
    player_choise = 3
    // spock
    basic.showLeds(`
        # # . # #
        # # . # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
/**
 * 0 - rock
 * 
 * 1 - paper
 * 
 * 2 - scissors
 * 
 * 3 - spock
 * 
 * 4 - lizard
 */
input.onGesture(Gesture.Shake, function () {
    bot_choise = randint(0, 4)
    if (bot_choise == player_choise) {
        basic.showIcon(IconNames.Asleep)
        choise()
    } else if (player_choise == 3 && bot_choise == 0 || player_choise == 3 && bot_choise == 2 || (player_choise == 2 && bot_choise == 1 || player_choise == 2 && bot_choise == 4) || (player_choise == 1 && bot_choise == 3 || player_choise == 1 && bot_choise == 0 || (player_choise == 0 && bot_choise == 4 || player_choise == 0 && bot_choise == 2)) || (player_choise == 4 && bot_choise == 3 || player_choise == 4 && bot_choise == 1)) {
        basic.showIcon(IconNames.Happy)
        choise()
    } else if (player_choise == 0 && bot_choise == 3 || player_choise == 0 && bot_choise == 1 || (player_choise == 1 && bot_choise == 4 || player_choise == 1 && bot_choise == 2) || (player_choise == 2 && bot_choise == 3 || player_choise == 2 && bot_choise == 0 || (player_choise == 3 && bot_choise == 4 || player_choise == 3 && bot_choise == 1)) || (player_choise == 4 && bot_choise == 0 || player_choise == 4 && bot_choise == 2)) {
        basic.showIcon(IconNames.Sad)
        choise()
    }
})
