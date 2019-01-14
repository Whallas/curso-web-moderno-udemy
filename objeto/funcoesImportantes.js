const pessoa = {
    nome: 'Rebeca',
    idade: 2, 
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))

console.log(Object.entries(pessoa))

// For each retorna um array de cada atributo do objeto, faço o destructuring no array para pegar os doid elementos do array diretamente
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// usado para adicionar atributo no objeto porém você pode acrescentar propriedades a ele
Object.defineProperty(pessoa, 'dataNascimento', {
    // ficará listado
    enumerable: true,
    //permite ser alterado, congela
    writable: false,
    value: '01/01/2019',
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
// concatena no primeiro parametro os objetos passados nos demais paramentros
const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)

//freeze - congela
Object.freeze(obj)