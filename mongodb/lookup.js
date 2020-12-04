db.estados.insert({
    "nome": "São Paulo",
    sigla: "SP",
    "regiao": "Sudeste",
    "cidades": [
        {
            "_id": ObjectId(),
            nome: "Campinas",
            area: 795.7,
            "prefeito": "Jonas Donizette",
            populacao: 103030
        },
        {
            "_id": ObjectId(),
            nome: "Guarulhos",
            populacao: 1133
        },
        {
            "_id": ObjectId(),
            nome: "Sorocaba",
            distanciaCapital: 87,
            populacao: 38434
        }
    ]
})

db.estados.insert({
    "nome": "Rio de Janeiro",
    sigla: "RJ",
    "regiao": "Sudeste",
    "cidades": [
        {
            "_id": ObjectId(),
            nome: "Niterói",
            area: 233.7,
            populacao: 343
        }
    ]
})

db.empresas.insert({
    nome: "Vale",
    cidadeId: ObjectId("5ef147e77e39148b4ebb4325")
})

db.empresas.aggregate([
    { $match: { nome: "Bradesco" } },
    {
        $lookup: {
            from: "estados",
            localField: "estadoId",
            foreignField: "_id",
            as: "estado"
        }
    },
    { $unwind: "estado" }
]).pretty()

db.empresas.aggregate([
    { $match: { nome: "Vale" } },
    {$lookup: {
        from: "estados",
        localField: "cidadeId",
        foreignField: "cidades._id",
        as: "estado"
    }},
    { $unwind: "$estado" },
    { $unwind: "$estado.cidades" },
    {$addFields: {
        mesmaCidade: { $cmp: ["$estado.cidades._id", "$cidadeId"] }
    }},
    { $match: { mesmaCidade: 0 } }
])