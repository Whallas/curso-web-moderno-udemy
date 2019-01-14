const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]);
//Insere elemento
valores[4] = 10
console.log(valores);
//Insere todos os elementos até o indice digitado
valores[10] = 5
console.log(valores);

console.log(valores.length);

valores.push({id: 3}, false, null, 'teste')
console.log(valores);

// Exclui o indice e o retorna
console.log(valores.pop())

// Deleta conteúdo do indice, mas o indice permanece 
delete valores[0]
console.log(valores);

console.log(typeof valores);
