// Os dois meios teoricamente funcionam da mesma forma
// A class é OO, e o factory é funcional
// A classe possui uma desvantagem que é o this, que dependendo do contexto pode mudar, e pode ser undefined, porque a funçã falar() pode ser chamada sem a instância de um objeto Pessoa.

// classe
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

// Factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()