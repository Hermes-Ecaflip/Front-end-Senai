// promisses
var promessa = new Promise((resolve,reject) => {
    let nome = "Ângelo";

    if(nome == "Ângelo"){
        resolve("O usuario foi encontrado!")
    }else{
        reject("O usuario não é o Ângelo")
    }
})