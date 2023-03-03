//declaração de variáveis: distancia; veloccar; veloccam; temppedcam; 
//distcar; tempocar; tempcam; distcam; distrestcm; disrestcr.
const DISTANCIA = 100;
const VELOCIDADE_CARRO = 110;
const VELOCIDADE_CAMINHAO = 80;
const TEMPO_PEDAGIO_CAMINHAO = 5;
const distanciaCarro = (DISTANCIA / 2);
const tempoCarro = distanciaCarro / VELOCIDADE_CARRO;
const tempoCaminhao = (distanciaCarro / VELOCIDADE_CAMINHAO) + ((2 * TEMPO_PEDAGIO_CAMINHAO) / 60);
const distanciaCaminhao = tempoCaminhao * VELOCIDADE_CAMINHAO;
const distanciaRestanteCaminhao = DISTANCIA - distanciaCaminhao;
const distanciaRestanteCarro = DISTANCIA - distanciaCarro;

// condicionais para verificar qual está mais perto
if (distanciaRestanteCaminhao < distanciaRestanteCarro) {
  console.log("O caminhão está mais próximo de Ribeirão Preto.");
} else if (distanciaRestanteCarro < distanciaRestanteCaminhao) {
  console.log("O carro está mais próximo de Ribeirão Preto.");
} else {
  console.log("O caminhão e o carro estão na mesma distância em relação a Ribeirão Preto.");
}

//Lógica utilizada: calculei a distância percorrida pelo carro até o caminhão, o tempo que o carro leva para percorrer essa distância, 
//o tempo que o caminhão leva para percorrer essa mesma distância, considerando os pedágios, 
//e a distância restante que cada veículo tem até a cidade de Ribeirão Preto.
// Em seguida, verifiquei qual veículo está mais próximo da cidade de Ribeirão Preto