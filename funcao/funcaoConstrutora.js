function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo provado
    let velocidadeAtual = 0

    // método público
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeAtual) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // método público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}
