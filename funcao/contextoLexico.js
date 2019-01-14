const valor = 'Global'
// A função carrega em si o contexto lexico ao qual ela pertence, assim a variável valor será a global.
function minhaFuncao() {
    const valor = 'Local'
    exec()
}

function exec() {
    console.log(valor)
}

minhaFuncao()