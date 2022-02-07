const PI = Math.PI;

/** Código del circulo */

console.group("Círculo");
const diametroCirculo = (radio) => radio * 2;

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

const areaCirculo = (radio) => Math.pow(radio, 2) * PI;
console.groupEnd();

/** Interacción con HTML */

function calcularDiametroCirculo() {
  const input = document.getElementById("RadioCirculo");
  const value = input.value;

  const diametro = diametroCirculo(value);
  alert(`El diametro de su círculo es ${diametro} cm`);
}

function calcularPerimetroCirculo() {
  const input = document.getElementById("RadioCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value)
  alert(`el perimetro de su circulo es de ${perimetro} cm²`);
}

function calcularAreaCirculo() {
  const input = document.getElementById("RadioCirculo");
  const value = input.value;

  const area = areaCirculo(value)
  alert(`el perimetro de su circulo es de ${area} cm²`);
}
