// abstração
function Veiculo(qtdeLugares, tipo) {
  this.qtdeLugares = qtdeLugares;
  this.tipo = tipo;
}

// herdeiras
function Carro(modelo, fabricante, qtdeLugares, tipo) {
  this.modelo = modelo;
  this.fabricante = fabricante;

  Veiculo.call(this, qtdeLugares, tipo);
}

function Moto(modelo, fabricante, qtdeLugares, tipo) {
  this.modelo = modelo;
  this.fabricante = fabricante;

  Veiculo.call(this, qtdeLugares, tipo);
}

// instâncias
const Celta = new Carro('Celta', 'Chevrolet', '4 lugares', 'Motorizado');
const Fazer = new Moto('Fazer', 'Yamaha', '2 lugares', 'Motorizado');
const Passat = new Carro('Passat', 'Volkswagen', '4 lugares', 'Motorizado');
const Hayabusa = new Moto('Hayabusa', 'Suzuki', '2 lugares', 'Motorizado');

// saída terminal
console.log(Celta);
console.log(Fazer);
console.log(Passat);
console.log(Hayabusa);
