const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// dentro da pasta atual, sirva o arquivos estáticos
app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// interpreta o arquivo do upload
const multer = require('multer')

// personaliza arquivos, pastas etc
const storage = multer.diskStorage({
    // altera pasta de destino
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    // altera os nomes do arquivos
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

// multer({storage}) => envia o objeto storage, 
// upload => é uma função que recebe o arquivo que vem na requisição do input de name 'arquivo'
const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) %2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8081, () => console.log('Executando...'))