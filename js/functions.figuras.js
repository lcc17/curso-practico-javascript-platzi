const PI = Math.PI;
console.log("PI es: " + PI);

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
// const areaCuadrado = Math.pow(ladoCuadrado, 2);
// console.log("El área del cuadrado es: " + areaCuadrado + " cm²");
console.groupEnd();

/** Código triangulo */

console.group("Triángulo");
// const ladoLateralTriangulo1 = 6;
// const ladoLateralTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triangulo es de: " + areaTriangulo + " cm²");
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.groupEnd();

/** Código del circulo */

console.group("Círculo");
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo);

// const diametroCirculo = radioCirculo * 2;
// console.log("El díametro del círculo es: " + diametroCirculo) + " cm";
const diametroCirculo = (radio) => radio * 2;

// const perimetroCirculo = diametroCirculo * PI;
// console.log(
//   "La perímetro del circulo es: " + perimetroCirculo + " cm   "
// );
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// const areaCirculo = Math.pow(radioCirculo, 2) * PI;
// console.log(
//   "El área del circulo es: " + areaCirculo + " cm²"
// );
const areaCirculo = (radio) => Math.pow(radio, 2) * PI;
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
