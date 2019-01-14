// não aceita repetição/não indexada
const times = new Set()
times.add('vasco').add('São paulo').add('palmeiras').add('vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
times.delete('palmeiras')
console.log('palmeiras')
const nomes = ['raquel', 'lucas', 'julia', 'lucas']
const snomes = new Set(nomes)
console.log(snomes)