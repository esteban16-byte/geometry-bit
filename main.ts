function transcision () {
    basic.showIcon(IconNames.Square)
    basic.pause(200)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.clearScreen()
}
// Manejamos las pulsaciones de los botones con eventos
input.onButtonPressed(Button.A, function () {
    if (nivel == 0) {
        // Avanzar al siguiente nivel
        nivel += 1
    } else {
        // Incrementar nivel
        nivel += 1
        if (nivel >= 4) {
            // Reiniciar el nivel si es mayor que 3
            nivel = 1
        }
    }
})
function for_cambio_nivel () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(120)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(120)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(120)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        `)
    basic.pause(120)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    basic.pause(120)
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    if (nivel > 0) {
        // Decrementar nivel si estamos por encima de 0
        nivel += 0 - 1
        if (nivel < 1) {
            // Volver al nivel 3 si baja de 1
            nivel = 3
        }
    }
})
let nivel = 0
nivel = 0
basic.showString("Geometry:bit")
// Mostrar el primer patrón de LEDs
basic.showLeds(`
    . # # . .
    . # # # .
    . # # # #
    . # # # .
    . # # . .
    `)
basic.pause(50)
// Mostrar el número de nivel según el estado
basic.forever(function () {
    if (nivel > 0) {
        // Pausa para evitar cambios rápidos
        basic.pause(200)
        if (nivel == 1) {
            basic.showString("stereo madness")
        } else if (nivel == 2) {
            basic.showString("back on track")
        } else if (nivel == 3) {
            basic.showString("polargeist")
        }
    }
})
