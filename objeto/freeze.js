// Congelar o objeto para que seja constante
const pessoa = { nome: 'Joao' }
pessoa.nome = 'pedro'

Object.freeze(pessoa)
// depois do freeze não se pode alterar o objeto
pessoa.nome = 'maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })