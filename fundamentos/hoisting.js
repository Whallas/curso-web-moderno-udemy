// Hosisting -> Irçamento
// O interpretador do javascript lança uma var para o topo.
console.log('a =', a);
var a = 2
console.log('a =', a);
// Nesse caso o primeiro log é dado como undefined, o interpretador moveu 'a' para o topo. Em caso de comentar a linha 4, daria erro var is not defined na compilação.
// Evitar totalmente isso, não existe necessidade de usar.

// Hoisting não existe em let
console.log('a =', b);
let b = 2
console.log('a =', b);
// Vai dar erro
