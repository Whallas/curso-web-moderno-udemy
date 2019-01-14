//novo recurso do ES2015
//Desestruturar um objeto, ou seja, retirar atributos
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logadouro: 'Rua ABC',
        numero: 1000
    }
}
// em objetos usa-se chaves, em arrays usa-se colchetes
// os atributos do objeto serão criados como variáveis
const { nome, idade } = pessoa
console.log(nome, idade)

// pode-se também criar as novas variáveis com outros nomes
const { nome: n, idade: i} = pessoa
console.log(n, i)

// Em caso de atributo que não exista, o valor retornado será undefined
// Pode-se usar valores padrão para as variáveis
const { sobrenome, tipoPessoa = 'F' } = pessoa
console.log(sobrenome, tipoPessoa)

const { endereco: { logadouro, numero, cep } } = pessoa
console.log(logadouro, numero, cep)

const { conta: {ag, num} } = pessoa
console.log(ag, num)
