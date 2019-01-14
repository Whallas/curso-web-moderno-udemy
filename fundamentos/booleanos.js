let isAtivo = false
console.log(isAtivo);

isAtivo = true
console.log(isAtivo);

isAtivo = 1
console.log(!!isAtivo);

console.log('\nos verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!{isAtivo: true})

console.log('\nos falsos...')
console.log(!!0)
console.log(!!null)
console.log(!!NaN)
console.log(!!'')
console.log(!!undefined)
console.log(!!{isAtivo: false})

console.log('\nPra finalizar...')
console.log(!!{a: '' || null || 0 || 'opa'})

let nome = ''
// Como o nome está vazio, nesse contexto representa false, então através do || é executado o 'else' imprimindo 'Desconhecido'
console.log(nome || 'Desconhecido');
