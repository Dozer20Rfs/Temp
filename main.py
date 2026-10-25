temp = 0
music.set_volume(50)
while True:
    temp = input.temperature()
    basic.show_number(temp)
    if temp > 45:
        while input.temperature() > 45:
            music.set_volume(255)
            basic.show_leds("""
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                """)
            music.play(music.tone_playable(880, music.beat(BeatFraction.WHOLE)),
                music.PlaybackMode.UNTIL_DONE)
            basic.clear_screen()
            basic.show_string("FIRE!")
            basic.pause(2000)
        music.set_volume(50)
    elif temp < 10:
        music.play(music.tone_playable(147, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        basic.pause(5000)
    elif temp > 30:
        music.play(music.tone_playable(659, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)