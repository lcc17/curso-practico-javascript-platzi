/** Código cuadrado */

console.group("Cuadrado");
// calculo del perímetro de un Cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}
// se le llama a la funcion asi: perimetroCuadrado(valorNumerico)

// cálculo del área de un Cuadrado
function areaCuadrado(lado) {
  return Math.pow(lado, 2);
}
console.groupEnd();

/** Interacción con HTML */

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert("el perímetro del cuadrado es " + perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert("el área del cuadrado es " + area);
}
