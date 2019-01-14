// O bloco fora de escopo transforma 'numero' em global e a eclaração com 'var' traduz para uma única variável e portanto, são impressos apenas 2.
var numero = 1
{
    var numero = 2
    console.log('dentro =', numero);
}
console.log('fora =', numero);