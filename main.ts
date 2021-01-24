bluetooth.onBluetoothConnected(function () {
    soundExpression.happy.play()
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `).showImage(0, 100)
    images.createImage(`
        # # # # #
        # # # # #
        # # . # #
        # # # # #
        # # # # #
        `).showImage(0, 100)
    images.createImage(`
        # # # # #
        # # . # #
        # . . . #
        # # . # #
        # # # # #
        `).showImage(0, 100)
    images.createImage(`
        # # . # #
        # # . # #
        . . . . .
        # # . # #
        # # . # #
        `).showImage(0, 100)
    images.createImage(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `).showImage(0, 100)
    led.setBrightness(0)
    images.createImage(`
        # . # # .
        . # # . #
        . . # # .
        . # # . #
        # . # # .
        `).showImage(0, 100)
    for (let index = 0; index < 255; index++) {
        led.setBrightness(led.brightness() + 1)
        basic.pause(1)
    }
    basic.pause(1000)
    for (let index = 0; index < 255; index++) {
        led.setBrightness(led.brightness() - 1)
        basic.pause(1)
    }
    basic.clearScreen()
    soundExpression.hello.play()
})
input.onButtonPressed(Button.A, function () {
    soundExpression.happy.play()
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `).showImage(0, 100)
    images.createImage(`
        # # # # #
        # # # # #
        # # . # #
        # # # # #
        # # # # #
        `).showImage(0, 100)
    images.createImage(`
        # # # # #
        # # . # #
        # . . . #
        # # . # #
        # # # # #
        `).showImage(0, 100)
    images.createImage(`
        # # . # #
        # # . # #
        . . . . .
        # # . # #
        # # . # #
        `).showImage(0, 100)
    images.createImage(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `).showImage(0, 100)
    led.setBrightness(0)
    images.createImage(`
        # . # # .
        . # # . #
        . . # # .
        . # # . #
        # . # # .
        `).showImage(0, 100)
    for (let index = 0; index < 255; index++) {
        led.setBrightness(led.brightness() + 1)
        basic.pause(1)
    }
    basic.pause(1000)
    for (let index = 0; index < 255; index++) {
        led.setBrightness(led.brightness() - 1)
        basic.pause(1)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    soundExpression.happy.play()
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `).showImage(0, 100)
    images.createImage(`
        # # # # #
        # # # # #
        # # . # #
        # # # # #
        # # # # #
        `).showImage(0, 100)
    images.createImage(`
        # # # # #
        # # . # #
        # . . . #
        # # . # #
        # # # # #
        `).showImage(0, 100)
    images.createImage(`
        # # . # #
        # # . # #
        . . . . .
        # # . # #
        # # . # #
        `).showImage(0, 100)
    images.createImage(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `).showImage(0, 100)
    led.setBrightness(0)
    images.createImage(`
        # . # # .
        . # # . #
        . . # # .
        . # # . #
        # . # # .
        `).showImage(0, 100)
    for (let index = 0; index < 255; index++) {
        led.setBrightness(led.brightness() + 1)
        basic.pause(1)
    }
    basic.pause(1000)
    for (let index = 0; index < 255; index++) {
        led.setBrightness(led.brightness() - 1)
        basic.pause(1)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    soundExpression.happy.play()
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # . . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # . . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `).showImage(0, 100)
    images.createImage(`
        # # # # #
        # # # # #
        # # . # #
        # # # # #
        # # # # #
        `).showImage(0, 100)
    images.createImage(`
        # # # # #
        # # . # #
        # . . . #
        # # . # #
        # # # # #
        `).showImage(0, 100)
    images.createImage(`
        # # . # #
        # # . # #
        . . . . .
        # # . # #
        # # . # #
        `).showImage(0, 100)
    images.createImage(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `).showImage(0, 100)
    led.setBrightness(0)
    images.createImage(`
        # . # # .
        . # # . #
        . . # # .
        . # # . #
        # . # # .
        `).showImage(0, 100)
    for (let index = 0; index < 255; index++) {
        led.setBrightness(led.brightness() + 1)
        basic.pause(1)
    }
    basic.pause(1000)
    for (let index = 0; index < 255; index++) {
        led.setBrightness(led.brightness() - 1)
        basic.pause(1)
    }
    basic.clearScreen()
})
bluetooth.startAccelerometerService()
bluetooth.startButtonService()
bluetooth.startIOPinService()
bluetooth.startLEDService()
bluetooth.startTemperatureService()
bluetooth.startMagnetometerService()
