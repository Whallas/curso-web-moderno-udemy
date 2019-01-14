// no linux não funciona /moduloa
const moduloA = require('../../moduloA')
console.log(moduloA.ola)

// meu node_module customizado
const saudacao = require('saudacao')
console.log(saudacao.ola)

// não é nececssário dizer o nome do arquivo
const c = require('./pastaC')
console.log(c.ola2)

/*const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)*/