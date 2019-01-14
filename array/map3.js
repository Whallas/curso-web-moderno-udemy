Array.prototype.map2 = function (callback) {
    const array = []
    for(let i = 0; i < this.length; i++) {
        array.push(callback(this[i], i, this))
    }
    return array
}

const nums = [1, 2, 3, 4, 5]

let resultado = nums.map2(function (e) {
    return e * 2
})

console.log(resultado)