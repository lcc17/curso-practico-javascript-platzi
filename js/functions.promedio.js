function calcularMediaAritmetica(sueldos) {
  /**
  let sumaSueldos = 0;
  for (i = 0; i < sueldos.length; i++) sumaSueldos = sumaSueldos + sueldos[i];
     */

  const sumaSueldos = sueldos.reduce(function (
    valorAcumulado = 0,
    nuevoElemento
  ) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioSueldos = sumaSueldos / sueldos.length;

  return promedioSueldos;
}
