const notas = [{nome: "Pedro", nota: 2},{nome: "Guilherme", nota: 4}, {nome: "Henrique", nota: 6}, {nome: "João", nota: 8}, {nome: "Pietro", nota: 10}];

const notaDeCorte = notas.filter((item) => {
  const filtro = item.nota >= 6;
  return filtro;
})

console.log(notaDeCorte);