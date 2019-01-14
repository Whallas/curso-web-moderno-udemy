const sequencia = {
    _valor: 1, // convenção para varaiveis privadas
    get valor() { return this._valor++ },
    set valor(valor) { 
        if (valor > this._valor) {
            this._valor = valor 
        }
    }
}

// "implicitamente" está chamando o get
console.log(sequencia.valor, sequencia.valor)

// "implicitamente" está chamando o set
sequencia.valor = 1000
console.log(sequencia.valor)