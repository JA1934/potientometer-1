basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    if (pins.analogReadPin(AnalogPin.P0) < 500) {
        basic.showIcon(IconNames.Heart)
    } else if (pins.analogReadPin(AnalogPin.P0) < 1000 && 501 < pins.analogReadPin(AnalogPin.P0)) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.Duck)
    }
})
