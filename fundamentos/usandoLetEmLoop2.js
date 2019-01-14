var funcs = []

for(let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    })
}
// O valor referenciado de i é o do instante da construção da função anônima
funcs[0]()
funcs[3]()
funcs[9]()