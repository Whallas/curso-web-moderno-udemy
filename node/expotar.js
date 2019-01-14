// this, module.exports, exports apontam para o mesmo ojeto, Objeto módulo.

console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

// mas a variável que realmente é exportada é a module.exports
exports = null
console.log(module.exports)

// prova
exports = {
    nome: 'Teste'
}
console.log(module.exports)

