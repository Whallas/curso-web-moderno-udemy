var numero = 1
{   
    // Podem coexistir
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

/* var possui escopo global e de função, let pussui escopo global, de função e de bloco. */