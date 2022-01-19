const PI = Math.PI;
console.log("PI es: " + PI);

/** Código cuadrado */

console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

// calculo del perímetro de un Cuadrado
function perimetroCuadrado() {
    return ladoCuadrado * 4
}
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = Math.pow(ladoCuadrado, 2);
console.log("El área del cuadrado es: " + areaCuadrado + " cm²");
console.groupEnd();

/** Código triangulo */

console.group("Triángulo");
const ladoLateralTriangulo1 = 6;
const ladoLateralTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
  "Los lados latelares del triángulo son de: " +
    ladoLateralTriangulo1 +
    " cm, y la base del triangulo es: " +
    baseTriangulo +
    " cm"
    );
    console.log("La altura del tríangulo es de: " + alturaTriangulo);

const perimetroTriangulo =
  ladoLateralTriangulo1 * 2 + baseTriangulo;
console.log("El perímetro del triangulo es de: " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triangulo es de: " + areaTriangulo + " cm²");
console.groupEnd();

/** Código del circulo */

console.group("Círculo");
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo);

const diametroCirculo = radioCirculo * 2;
console.log("El díametro del círculo es: " + diametroCirculo) + " cm";

const perimetroCirculo = diametroCirculo * PI;
console.log(
  "La perímetro del circulo es: " + perimetroCirculo + " cm   "
);

const areaCirculo = Math.pow(radioCirculo, 2) * PI;
console.log(
  "El área del circulo es: " + areaCirculo + " cm²"
);
console.groupEnd();
