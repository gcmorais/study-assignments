let resultado = gets();
print(fizzBuzz(resultado));

//TODO: Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme o enunciado.

function fizzBuzz(resultado){
  if (resultado % 3 === 0 && resultado % 5 === 0){
    return 'FizzBuzz';
  }else if(resultado % 3 === 0) {
    return 'Fizz';
  }else if(resultado % 5 === 0) {
    return 'Buzz';
  }else {
    return resultado
  }
}