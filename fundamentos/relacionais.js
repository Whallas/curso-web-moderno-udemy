console.log('01)', '1' == 1) // comparação de valor, não de tipo
console.log('02)', '1' === 1) // comparação extrita, inclui tipo
console.log('03)', '3' != 3) 
console.log('04)', '3' !== 3) 

// Objetos, comparação de referências de memória, no caso abaixo sempre vai dar falso
const d1 = new Date(0)
const d2 = new Date(0)
console.log('04)', d1 == 2) 
console.log('05)', d1 === d2) 

console.log('06)', d1.getTime() == d2.getTime()) 
console.log('07)', d1.getTime() === d2.getTime())

console.log('08)', undefined == null)
console.log('09)', undefined === null)