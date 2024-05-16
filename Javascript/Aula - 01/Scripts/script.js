// Função para dividir a conta igualmente entre os clientes
function dividirConta() {
    // Solicita ao usuário a quantidade de clientes na mesa
    let qntClientes = Number(prompt("Insira a quantidade de clientes na mesa:"));    
    // Solicita ao usuário o valor total da conta
    let valorTotalMesa = Number(prompt("Insira qual foi o valor total da mesa R$:"));
  
    // Verifica se a quantidade de clientes é maior que 0
    if (qntClientes > 0) {
      // Calcula o valor dividido da conta por cliente
      let valorDividido = valorTotalMesa / qntClientes;
      // Exibe um alerta com o valor que cada cliente deve pagar
      alert(`O valor para cada cliente será de R$: ${valorDividido.toFixed(2)}`);
    } else {
      // Caso não haja clientes, exibe um alerta informando o erro
      alert("A quantidade de clientes deve ser maior que 0.");
    }
  }
  
  // Função para mostrar o número anterior, o próprio número e o sucessor
  function mostrarAdjacentes() {
    // Solicita ao usuário que digite um número
    let numero = Number(prompt("Digite um número:"));
    // Verifica se o número digitado é válido
    if (!isNaN(numero)) {
      // Exibe no console o antecessor, o número e o sucessor
      console.log(`Antecessor: ${numero - 1}, Número: ${numero}, Sucessor: ${numero + 1}`);
      // Exibe um alerta com o antecessor, o número e o sucessor
      alert(`Antecessor: ${numero - 1}, Número: ${numero}, Sucessor: ${numero + 1}`);
    } else {
      // Caso o número digitado não seja válido, exibe um alerta informando o erro
      alert("Por favor, insira um número válido.");
    }
  }
  
  // Chama a função dividirConta
  dividirConta();
  // Chama a função mostrarAdjacentes após a conclusão da função dividirConta
  mostrarAdjacentes();
  