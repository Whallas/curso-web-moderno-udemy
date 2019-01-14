// par nome/valor
const saudacao = "hello" // Contexto léxico 1

function exec() {
    const saudacao = "Falaaa" // Contexto léxico 2
    return saudacao
}

// Objetos são rupos aninhados de pares chave/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logadouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);