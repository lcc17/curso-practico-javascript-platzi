// const precioOriginal = 120;
// const descuento = 18;
/** ARRAY de beneficios */
const beneficiosFiscales = [
  "bufet2025",
  "programacion2022",
  "contrucciones2023",
];

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  // const inputDiscount = document.getElementById("InputDiscount");
  // const discountValue = inputDiscount.value;

  const InputBeneficioFiscal = document.getElementById("InputBeneficioFiscal");
  const beneficioValue = InputBeneficioFiscal.value;

  let beneficio;

  switch (beneficioValue) {
    case [0]: //bufet2025
      beneficio = 40;
      break;
    case [1]: //programacion2022
      beneficio = 30;
      break;
    case [2]: //contrucciones2023
      beneficio = 20;
      break;
  }

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    // discountValue
    beneficioValue
  );

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}


// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });
