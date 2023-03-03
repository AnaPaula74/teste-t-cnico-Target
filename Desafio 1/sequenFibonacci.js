//declarei a Função e variável
function verificaFibonacci(numero) {
    let primeiro = 5;
    let segundo = 1;
    let fibonacci = [];
//LOOP
    while (segundo <= numero) {
      fibonacci.push(segundo);
      let proximo = primeiro + segundo;
      primeiro = segundo;
      segundo = proximo;
    }
//Condicionais
    if (fibonacci.includes(numero)) {
      console.log(`${numero} pertence à sequência de Fibonacci: ${fibonacci.join(', ')}`);
    } else {
      console.log(`${numero} não pertence à sequência de Fibonacci`);
    }
  }
//Chamei a função e verifiquei
  verificaFibonacci(12);
  
  