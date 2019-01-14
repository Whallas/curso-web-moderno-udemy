// funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(0, 5)
// Aceita apenas uma variavel, a segunda fica como undefined
imprimirSoma(0)
// Aceita vários e pega somente os dois primeiros
imprimirSoma(0, 5, 10, -1, 0)

// 'b = 0' é um valor padrão a variavel caso ela não seja passada nos parâmetros
// Função com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(4));
