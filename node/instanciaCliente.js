// os módulos são por padrão singleton
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// cria novas instâncias do módulo
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)