const dataEvento = new Date('Oct 27, 2024 19:00:00');
const timeStampDoEvento = dataEvento.getTime();

const contadorHoras = setInterval(() => {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distanciaEvento = timeStampDoEvento - timeStampAtual;

  const diaEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60;

  const diasAteEvento = Math.floor(distanciaEvento / diaEmMs);
  const horasAteOEvento = Math.floor((distanciaEvento % diaEmMs) / horaEmMs);
  const minutosAteOEvento = Math.floor((distanciaEvento % horaEmMs) / minutoEmMs);
  const segundosAteOEvento = Math.floor((distanciaEvento % minutoEmMs) / 1000);

  document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
}, 1000);
