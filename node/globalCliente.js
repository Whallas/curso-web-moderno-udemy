require('./global')

// não precisa colocar o 'global.'
console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!'
console.log(MinhaApp.saudacao())