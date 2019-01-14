const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))

// usando GET abaixo, o corpo estaria em req.query e os parametros vão direto na url
app.post('/usuarios', (req, resq) => {
    console.log(req.body)
    resq.send('<h1>Parabéns. Usuário incluído!</h1>')
})

app.post('/usuarios/:id', (req, resq) => {
    console.log(req.params.id)
    console.log(req.body)
    resq.send('<h1>Parabéns. Usuário Alterado!</h1>')
})

app.listen(3003)