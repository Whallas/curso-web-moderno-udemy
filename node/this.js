console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    //dentro da função o this não aponta para exports
    console.log(this === exports)
    console.log(this === module.exports)
    // aqui this aponta para global
    console.log(this === global)
}
logThis()