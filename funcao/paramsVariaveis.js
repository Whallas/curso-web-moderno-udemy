// A função não ter parametros não quer dizer que você não pode passar pra ela parametros
// Toda função em JS tem um array interno arguments

function soma() {
    let soma = 0
    for(i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 'teste'))
console.log(soma('a', 'b', 'c', 'd'))