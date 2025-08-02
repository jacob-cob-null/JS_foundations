"use strict"

const calculateBtn = document.getElementById('calculate');
const res = document.getElementById('result');

//submit button
calculateBtn.addEventListener('click', () => {
  let amount = document.getElementById('amount').value;
  let tip = document.getElementById('tip').value;

  //check if empty
  if (amount.trim() === '' || tip.trim() === '') {
    alert('Inputs should not be empty');
    return;
  }

  //converted
  amount = parseFloat(amount)
  tip = parseFloat(tip)

  //arrow function
  let getTotal = (amount, calcTip) => amount + calcTip

  let calcTip = calculateTip(amount, tip)//gets tip
  let total = getTotal(amount, calcTip) //gets total


  showResult(amount, calcTip.toFixed(2), total.toFixed(2))

}
);

function showResult(amount, percent, result) {
  const calcContainer = document.getElementById('calcContainer');
  const totalContainer = document.getElementById('totalContainer');

  if (!isNaN(result)) {
    calcContainer.innerHTML = ''
    calcContainer.innerHTML = `Amount: $${amount} <br> Tip: $${percent}`

    totalContainer.innerHTML = ''
    totalContainer.innerHTML = `Total: <br> $${result} `

  }

}
function calculateTip(amount, tip) {

  if (isNaN(amount) || isNaN(tip)) {
    alert('Amount should only be digits');
    return;
  }
  if (amount < 0 || tip < 0) {
    alert('Inputs should not be negative');
    return;
  }

  console.log(amount * (tip / 100))
  return amount * (tip / 100);

}
