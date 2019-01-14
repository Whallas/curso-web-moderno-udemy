// promisse - promessa, usada para processamento assincrono
// funciona como uma promessa atendida ou rejeitada dependendo da situação
// parecido com callback
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve atende a promessa, chama o(S) then(s)
            // reject denega a promessa, chama o catch
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!') // encadeameto de funções praquilo que você recebe como resposta
    .then(frase => frase.concat('?1?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // tratamento de erro