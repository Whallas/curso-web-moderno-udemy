const pai = { nome: 'Pedro', corCabelo: 'preto' }
// outra forma de se fazer herança
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

// Pode-se também logo depois do prototype, inserir os atributos do novo objeto, e além disso pode-se definir suas properties.
const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

for(let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}