function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

const lista1 = [200, 400, 1200, 1000000];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let mediana;

if (esPar(lista1.length)) {
  // necesitamos dos elementos:
  const elemento1 = lista1[mitadLista1 - 1];
  const elemento2 = lista1[mitadLista1];
  // -> por el medio
  const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
  // -> mediana
  mediana = promedioElemento1y2;
} else {
  // posición mitadLista1 dentro de lista1
  mediana = lista1[mitadLista1];
  // -> mediana
}
