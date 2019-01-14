// Funções anônimas

// Armazenando uma função numa variável
const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(2, 3)

//retorno implicito
const subtracao = (a, b) => a - b

//unica variavel não precisa de parenteses
const imprime2 = a => console.log(a)

imprime2(3)