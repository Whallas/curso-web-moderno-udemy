console.log(typeof Object);
console.log(typeof new Object);

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente);

class Produto {} // ES 2015 (ES6) 
//Como vi antes, class é apenas uma function disfarçada
console.log(typeof Produto)
console.log(typeof new Produto());

