let temp = 0
music.setVolume(50)
while (true) {
    temp = input.temperature()
    basic.showNumber(temp)
    if (temp > 45) {
        while (input.temperature() > 45) {
            music.setVolume(255)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            basic.clearScreen()
            basic.showString("FIRE!")
            basic.pause(2000)
        }
        music.setVolume(50)
    } else if (temp < 10) {
        music.play(music.tonePlayable(147, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(5000)
    } else if (temp > 30) {
        music.play(music.tonePlayable(659, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
}
