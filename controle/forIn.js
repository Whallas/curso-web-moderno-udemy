// O in em Javascript retorna o indice e não o valor como é no python.

const notas = [16., 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(i, notas[i])
}

// O for in não é interessante para arrays, existem formas melhores de percorrê-los.
// Já nos objetos, o for in faz bem mais sentido de ser usado.

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}