// Definição de uma função que retorna uma promessa que se resolve após um tempo
function codigoDemorado() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Enrolei");
            resolve();
        }, 3000);
    });
}

// Função assíncrona que aguarda a conclusão da promessa
async function carregando() {
    console.log("Comecei");
    await codigoDemorado(); // Aguarda a promessa ser resolvida
    console.log("Terminei");
}

// Chamada da função assíncrona
carregando();

// Exemplo de uso da promessa sem 'await', o que causa um comportamento não sincronizado
console.log("Comecei");
codigoDemorado(); // A promessa é iniciada, mas não é aguardada
console.log("Terminei"); // Este log é executado imediatamente após o início da promessa, não após sua conclusão

// Exemplo de tratamento de erro com 'catch'
// promessa.then(faça => {algo esperado um erro})
// catch = executa o código esperando todos os resultados não esperados (erros, rejects)
promessa.catch((resultado) => {
    console.log(resultado);
});
