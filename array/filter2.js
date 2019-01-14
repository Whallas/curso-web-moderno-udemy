Array.prototype.filter2 = function (callback) {
    array = []
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this))
            array.push(this[i])
    }
    return array
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 18.99, fragil: false }
]

console.log(produtos.filter2(function (p) {
    return p.fragil && p.preco > 500
}))