Array.prototype.reduce2 = function (callback, valorInicial) {
    let acumulador, i
    if (valorInicial === 0 || !!valorInicial) {
        acumulador = valorInicial
        i = 0
    } else {
        acumulador = this[0]
        i = 1
    }
    for(; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const alunos = [
    { nome: 'João', nota: 7.3, bolsista:  false},
    { nome: 'Maria', nota: 9.2, bolsista:  true},
    { nome: 'Pedro', nota: 9.8, bolsista:  false},
    { nome: 'Ana', nota: 8.7, bolsista:  true}
]

const resultado = alunos.map(a => a.nota).reduce2(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)