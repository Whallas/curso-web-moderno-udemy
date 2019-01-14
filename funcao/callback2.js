const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.8]

// Sem o callback
let notasBaixas = []
for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com callback
// filter - função callback para filtrar os itens retornados pela função
notasBaixas = notas.filter(nota => nota < 7)
console.log(notasBaixas)