input.onButtonPressed(Button.A, function () {
    if (nivel == 0) {
        // Ejecutar transición cuando salimos del nivel 0
        transicionEntreNiveles()
        nivel += 1
    } else {
        basic.clearScreen()
        basic.pause(20)
        nivel += 0 - 1
        if (nivel < 1) {
            nivel = 3
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (nivel > 0) {
        basic.clearScreen()
        basic.pause(20)
        nivel += 1
        if (nivel >= 4) {
            // Reiniciar el nivel si es mayor que 3
            nivel = 1
        }
    }
})
function transicionEntreNiveles () {
    // Mostrar una animación de transición con LEDs
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    basic.clearScreen()
}
let nivel = 0
nivel = 0
// Mostrar un mensaje inicial
basic.showString("Geometry:bit")
basic.showLeds(`
    . # # . .
    . # # # .
    . # # # #
    . # # # .
    . # # . .
    `)
// Mostrar el número o el nombre del nivel
basic.forever(function () {
    if (nivel > 0) {
        basic.pause(200)
        if (nivel == 1) {
            basic.clearScreen()
            basic.showLeds(`
                # # . # .
                # . # # #
                . # . # .
                # # . # .
                . . . . .
                `)
        } else if (nivel == 2) {
            basic.clearScreen()
            basic.showLeds(`
                # . # # .
                # . # # .
                # # . # .
                # # . # .
                . . . . .
                `)
        } else if (nivel == 3) {
            basic.clearScreen()
            basic.showLeds(`
                # # . # #
                # # . # #
                # . . # #
                # . . . .
                . . . . .
                `)
        }
    }
})
