// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = parseInt(gets());

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.

let valorGuardado = 0;


for (let i = 0; i < elementos.length; i++){
  
  let posci = elementos.indexOf(valor)
  
 	if(elementos[i] === valor){
    valorGuardado = 'Achei '+ elementos[i]+ ' na posicao ' + posci;
    break
	}else{
		valorGuardado = 'Numero '+ valor + ' nao encontrado!';
	}
}
  
console.log(valorGuardado);