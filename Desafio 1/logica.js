// a) Adicionar 2 números ao número anterior
let a = [1, 3, 5, 7];
let proximoElementoA = a[a.length-1] + 2;
console.log(proximoElementoA); 
//Resultado no console: 9

//b) Multiplicar por 2 o número anterior
let b = [2, 4, 8, 16, 32, 64];
let proximoElementoB = b[b.length-1] * 2;
console.log(proximoElementoB); 
//Resultado no console: 128

//c) Adicionar o dobro do número anterior e somar 1
let c = [0, 1, 4, 9, 16, 25, 36];
let proximoElementoC = 2*c[c.length-1] + 1;
console.log(proximoElementoC);
//Resultado no console: 49

//d) Adicionar 12 ao número anterior
let d = [4, 16, 36, 64];
let proximoElementoD = d[d.length-1] + 12;
console.log(proximoElementoD);
//Resultado no console: 100

//e) Somar os dois números anteriores
let e = [1, 1, 2, 3, 5, 8];
let proximoElementoE = e[e.length-1] + e[e.length-2];
console.log(proximoElementoE); 
//Resultado no console: 13


//f) Não tenho certeza se a lógica está correta, mas alternei entre números pares e ímpares, acrescentei 8 unidades a números pares e 1 unidade a números ímpares

let numeros = [2, 10, 12, 16, 17, 18, 19];

let ultimoNumero = numeros[numeros.length - 1];
let proximoNumero;

if (ultimoNumero % 2 === 0) {
  proximoNumero = ultimoNumero + 8;
} else {
  proximoNumero = ultimoNumero + 1;
}

numeros.push(proximoNumero);

console.log(numeros);





