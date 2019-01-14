const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

// bind é função dentro das funções por padrão
// envia por bind a referência para o this
// bind não altera a função atual, ele retorna uma nova função
const falarDePessoa = pessoa.falar.bind(pessoa)