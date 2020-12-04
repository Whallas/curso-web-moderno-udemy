db.estados.aggregate([
    { $project: { nome: 1, "cidades.nome": 1, _id: 0 } }
])

db.estados.aggregate([
    {
        $project: {
            // Soma a população das cidades, cria a variável populacao
            populacao: { $sum: "$cidades.populacao" },
            sigla: 1,
            _id: 0
        }
    },
    {
        // agrupa em população total e some populacao criada anteriormente
        $group: { _id: null, populacaoTotal: { $sum: "$populacao" } }
    },
    {
        // apresenta somente populacaoTotal
        $project: { _id: 0, populacaoTotal: 1 }
    }
])

db.estados.aggregate([
    {
        $match: { "cidades.nome": "Campinas" }
    },
    {
        $unwind: "$cidades"
    },
    {
        $match: { "cidades.nome": "Campinas" }
    },
    {
        $project: { _id: "$cidades._id" }
    }
]).pretty()

db.estados.update(
    { sigla: "SP" },
    { $push: { cidades: { nome: "Santos", populacao: 2342 } } }
)

db.estados.find({
    populacao: { $exists: true },
}, { _id: 0, nome: 1 })

// deleta onde não tem populacao, com limite de 1
db.estados.remove({ populacao: { $exists: false } }, 1)

db.estados.update({ sigla: "RJ" }, { $set: { populacao: 3434 } })

db.estados.remove({ populacao: { $lt: 40000 } })