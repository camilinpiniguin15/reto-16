let lightLevel = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > 50) {
        basic.showIcon(IconNames.Sad)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    lightLevel = input.lightLevel()
    radio.sendNumber(lightLevel)
})
