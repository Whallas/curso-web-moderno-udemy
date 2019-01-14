const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5))

// Consulta o indice na tabela ASCII ou unicode
console.log(escola.charCodeAt(3))

console.log(escola.indexOf('3'))

// Imprime do indice 1 em diante
console.log(escola.substr(1))
// Imprime do indice 0 ao terceiro
console.log(escola.substring(0, 3))

// Concatenar
console.log('Escola'.concat(escola.concat('!')))

// Replace, pode ser usado regex
console.log(escola.replace(3, 'e'));

console.log('Ana,Maria,Pedro'.split(','));



