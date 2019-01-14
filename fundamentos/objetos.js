// Em Javascript Objeto é uma coleção de pares chave e valor
const prod1 = {}
prod1.nome = 'Celular Ultra mega'
prod1.preco = 499.98
prod1['Desconto Legal'] = 0.4
console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.00,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2);
console.log(typeof prod2);