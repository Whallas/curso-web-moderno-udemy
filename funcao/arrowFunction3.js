let comparaComthis = function(param) {
    console.log(this === param);
}
console.log('Function normal:')
comparaComthis(global)
comparaComthis(this)

const obj = {}
comparaComthis = comparaComthis.bind(obj)
console.log('Function com bind:')
comparaComthis(global)
comparaComthis(obj)

let comparaComthisArrow = (param) => console.log(this === param)
console.log('Arrow Function:')
comparaComthisArrow(global)
comparaComthisArrow(this)
comparaComthisArrow(module.exports)

comparaComthisArrow = comparaComthisArrow.bind(obj)
console.log('Arrow Function com bind:')
comparaComthisArrow(obj)
comparaComthisArrow(module.exports)