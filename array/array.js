console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados, aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados, aprovados.length)
console.log(aprovados[8] === undefined)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados, aprovados.length)

aprovados = ['Bia', 'Carlos', 'Ana']
// deleta item(ens) e/ou adiciona item/(ens) no array a patir da posição dada
// Fará apartir do elemento 1, excluir 1 ou mais outros de acordo com o segundo elemento, e na posição atual adicionar os elementos dos paramentros seguintes
aprovados.splice(1, 1, 'Elemento1', 'Elemento2')
console.log(aprovados, aprovados.length)