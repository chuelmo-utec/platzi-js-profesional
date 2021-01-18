// typescript
//console.log('Hello, TypeScript')
//
//function add(a: number, b: number) {
//    return a + b
//}
//
//const sum = add(3,5)
//console.log(sum)

//Tipos básicos

//Boolean
let muted: boolean = true
muted = false

//Números
let numerador: number = 42

//Strings
let nombre: string = 'Rodrigo'
let saludo = `Me llamo ${nombre}`

//Arreglos
let people: string[] = []
people = ['Isabel', 'Nicole', 'Sergio']
// people.push(878) <-- error

let peopleAndNumbers: Array<string | number> = []
peopleAndNumbers.push('Jorge')
peopleAndNumbers.push(345)

//Enum
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul',
}

let colorFavorito: Color = Color.Azul
console.log(`Mi color favorito es ${colorFavorito}`)

// keyword Any
let comodin: any = 'Joker'
comodin = {type: 'Wildcard'}

//Objetc
let someObject: object = {tipo: 'Jugador'}

//Funciones
function add(a: number, b: number): number {
    return a + b
}

const sum = add(4, 5)

function createAdder (a: number): (number) => number {
    return function (b: number) {
        return b + a
    }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)

function fullName(firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`
}

const richard = fullName('Richard', 'Kaufman')
const chuelmo = fullName('Christian')

interface Rectangulo {
    ancho: number
    alto: number
    color: Color
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Azul
}

rect.toString = function(){
    return `Un rectángulo ${this.color}`
}

function area(r: Rectangulo) {
    return r.alto * r.ancho
}


const areaRect = area(rect)
console.log(areaRect)
console.log(rect.toString())

