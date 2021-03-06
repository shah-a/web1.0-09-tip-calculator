const tipDisplay = document.querySelector("#tip-display");
const totalDisplay = document.querySelector("#total-display");
const billInput = document.querySelector("#bill");
const tipInput = document.querySelector("#tip");
const peopleInput = document.querySelector("#people");

function calculateTip() {
  const billValue = parseFloat(billInput.value);
  const tipValue = parseFloat(tipInput.value);
  const numPeople = parseInt(peopleInput.value);

  const tipAmount = billValue * (tipValue/100) / numPeople;
  const totalAmount = billValue * (1 + tipValue/100);

  tipDisplay.innerHTML = `${tipAmount.toFixed(2)}`;
  totalDisplay.innerHTML = `${totalAmount.toFixed(2)}`;
}

calculateTip();

billInput.addEventListener("input", calculateTip);
tipInput.addEventListener("input", calculateTip);
peopleInput.addEventListener("input", calculateTip);
