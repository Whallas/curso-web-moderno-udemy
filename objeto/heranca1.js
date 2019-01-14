// O interpretador usa o atributo __proto__ para varrer a cadeia de objetos para procurar pelo atributo referenciado, essa é a forma de se fazer herança em JS
// Todo objeto em JS possui um atributo __proto__ que possui por padrão o objeto Object.prototype

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__)

function MeuObjeto() {}
console.log(typeof Object.prototype, typeof MeuObjeto)