// Destructuring em funções
// A função recebe como argumento um objeto, mas já nos parâmetros ele é desestruturado e retirado as variáveis
// Então não se especifica o objeto na função, se especifica o destructuring.

function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({}))