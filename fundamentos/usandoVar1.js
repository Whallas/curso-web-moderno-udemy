// Sera existe fora do bloco nesse caso
{ { { var sera = 'Será???' } } }
console.log(sera)

// Variável criada dentro de uma função não existe fora do seu escopo, diferente da acima.

/* No navegador existe o objeto window onde ficam todos as variáveis globais, caso você crie uma variável em bloco não definido ela fará parte do objeto window. */