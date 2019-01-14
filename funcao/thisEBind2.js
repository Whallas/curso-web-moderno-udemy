function Pessoa() {
    this.idade = 0
    const self = this

    // Dispara uma outra função a partir de um intervalo que você passou
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa