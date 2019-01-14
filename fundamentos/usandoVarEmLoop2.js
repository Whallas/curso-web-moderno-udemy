var funcs = []

for(var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    })
}
// Sempre irá imprimir o mesmo valor 10
// Problema histórico do javascript
funcs[0]()
funcs[3]()
funcs[9]()