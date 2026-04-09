const numPx = document.getElementById("num-px");
const numRem = document.getElementById("num-rem");
const btnConverter = document.getElementById("btn-converter");
const resp = document.getElementById("resp");

const max = document.getElementById("max");
const min = document.getElementById("min");
const lMax = document.getElementById("l-max");
const lMin = document.getElementById("l-min");
const result = document.getElementById("result");
const btnCalculation = document.getElementById("calculation-btn");

// Fixed Logic: REM to PX (1rem * 16 = 16px)
function convertToPx(px) {
  return px / 16;
}

// Fixed Logic: PX to REM (16px / 16 = 1rem)
function convertToRem(rem) {
  return rem * 16;
}

function calculationClamp(max, min, lMax, lMin) {
  const difference = max - min;
  const dTela = lMax - lMin;
  const vw = ((difference / dTela) * 100).toFixed(2);
  const b = (min - (vw * lMin) / 100).toFixed(2);
  const base = Number(b / 16).toFixed(2);

  return `${min / 16}rem, ${vw}vw + ${base}rem, ${max / 16}rem`;
}

btnConverter.addEventListener("click", () => {
  let valuePx = numPx.value;
  let valueRem = numRem.value;

  if (valuePx != "" && valueRem != "") {
    resp.textContent = "Digite apenas em 1";
  } else if (valueRem !== "") {
    const result = convertToRem(parseFloat(valueRem));
    resp.textContent = `${result}px`;
  } else if (valuePx !== "") {
    const result = convertToPx(parseFloat(valuePx));
    resp.textContent = `${result}rem`;
  } else {
    alert("Por favor incira um valor");
  }

  numPx.value = "";
  numRem.value = "";
});

btnCalculation.addEventListener("click", () => {
  const valueMax = Number(max.value);
  const valueMin = Number(min.value);
  const valueLMax = Number(lMax.value);
  const valueLMin = Number(lMin.value);

  result.textContent = calculationClamp(
    valueMax,
    valueMin,
    valueLMax,
    valueLMin,
  );
});
