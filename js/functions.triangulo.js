/** Código triangulo */

console.group("Triángulo");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.groupEnd();

/** Interacción con HTML */

function calcularPerimetroTriangulo() {
  let lado1 = document.getElementById("Lado1");
  let Lado1 = parseFloat(lado1.value);

  let lado2 = document.getElementById("Lado2");
  let Lado2 = parseFloat(lado2.value);

  let base = document.getElementById("BaseTriangulo");
  let BaseTriangulo = parseFloat(base.value);

  let perimetro = Lado1 + Lado2 + BaseTriangulo;

  alert(`El perímetro del triangulo es: ${perimetro}cm`);
}

function calcularAreaTriangulo() {
  let base = document.getElementById("BaseTriangulo");
  let BaseTriangulo = parseFloat(base.value);

  let altura = document.getElementById("AlturaTriangulo");
  let alturaTriangulo = parseFloat(altura.value);

  let area = (BaseTriangulo * alturaTriangulo) / 2;
  alert(`el área es de ${area}cm^2`);
}
