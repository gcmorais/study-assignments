function Multiply(a: number, b: number): number {
  return a * b;
}

function Salutation(nome: string): string{
  return `Olá ${nome}`
}

console.log("O valor da multiplicação é: " + Multiply(2,2));
console.log(Salutation("Guilherme"));