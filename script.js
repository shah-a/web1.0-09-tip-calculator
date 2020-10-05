const tipDisplay = document.querySelector("#tip-display");
const totalDisplay = document.querySelector("#total-display");
const billInput = document.querySelector("#bill");
const tipInput = document.querySelector("#tip");
const peopleInput = document.querySelector("#people");

function calculateTip() {
  const billValue = Number(billInput.value);
  const tipValue = Number(tipInput.value);
  const numPeople = Number(peopleInput.value);

  const tipAmount = billValue * (tipValue/100) / numPeople;
  const totalAmount = billValue + tipAmount;

  tipDisplay.innerHTML = `Tip per person: ${tipAmount.toFixed(2)}`;
  totalDisplay.innerHTML = `Bill total: ${totalAmount.toFixed(2)}`;
}

calculateTip();

billInput.addEventListener("input", calculateTip);
tipInput.addEventListener("input", calculateTip);
peopleInput.addEventListener("input", calculateTip);

/*
${bill}
${tippercent}%
${people}

${tiptotal} = ${tippercent}/100 * ${bill}
Tip/person = ${tiptotal} / ${people}
Total/person = ${bill}/${people} + ${tip/person}
*/
