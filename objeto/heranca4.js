function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

// os objetos criados de uma mesma função construtora apontam para o mesmo prototype, que é o prototype da função
console.log(obj1.__proto__ === obj2.__proto__)

console.log(MeuObjeto.prototype === obj2.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
}
obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

//Resumindo a loucura
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)