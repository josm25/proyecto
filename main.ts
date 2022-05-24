input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    ultrasonic_distance = Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_cm, DigitalPin.P7)
    IR = pins.digitalReadPin(DigitalPin.P2)
    if (ultrasonic_distance < 100 && ultrasonic_distance < 10) {
        if (IR == 1) {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
            basic.pause(1000)
        } else {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
        }
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
input.onButtonPressed(Button.A, function () {
    soil_moisture = Environment.ReadSoilHumidity(AnalogPin.P1)
    water_level = Environment.ReadWaterLevel(AnalogPin.P2)
    led.plotBarGraph(
    water_level,
    100
    )
    if (soil_moisture < 30) {
        pins.servoWritePin(AnalogPin.P9, 180)
        basic.pause(500)
    } else {
        pins.servoWritePin(AnalogPin.P9, 0)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (input.lightLevel() < 100) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
input.onButtonPressed(Button.B, function () {
    temp = Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P3)
    basic.pause(5000)
    RH = Environment.dht11value(Environment.DHT11Type.DHT11_humidity, DigitalPin.P4)
    basic.pause(5000)
    OLED.clear()
    OLED.writeStringNewLine("temp" + temp)
    OLED.writeStringNewLine("RH" + RH)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    temp = Environment.Ds18b20Temp(DigitalPin.P6, Environment.ValType.DS18B20_temperature_C)
    OLED.clear()
    OLED.writeString("temp" + temp)
    basic.pause(5000)
})
let RH = 0
let temp = 0
let water_level = 0
let soil_moisture = 0
let IR = 0
let ultrasonic_distance = 0
let strip: neopixel.Strip = null
OLED.init(128, 64)
basic.showIcon(IconNames.Heart)
strip = neopixel.create(DigitalPin.P4, 1, NeoPixelMode.RGB)
strip = neopixel.create(DigitalPin.P4, 1, NeoPixelMode.RGB)
OLED.init(128, 64)
