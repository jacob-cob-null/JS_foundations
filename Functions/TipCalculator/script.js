const calculateBtn = document.getElementById('calculate');
const res = document.getElementById('result');

calculateBtn.addEventListener('click', () => calculateTip());

function calculateTip() {
  const amount = document.getElementById('amount').value;
  const tip = document.getElementById('tip').value;

  if (amount == '' && tip == '') {
    alert('Fields should not be empty');
    return;
  }
  res.textContent = amount * tip;
}
