let strip = neopixel.create(DigitalPin.P5, 25, NeoPixelMode.RGB)
strip.show()
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        strip.showRainbow(1, 360)
    }
    strip.clear()
})
