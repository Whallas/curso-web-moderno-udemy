let valor // não inicializada

// Inicializado Sem valor o retorno é undefined
console.log(valor)
//Diferente de undefined
//console.log(valor2)

valor = null
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto);

produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco)

delete produto.preco
console.log(produto);
