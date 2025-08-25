import { showBalance } from "./render.js"

export let currentBalance = 0

export function getIncome() {
    const input = document.getElementById('amountIncome').value
    if (input < 0) {
        alert("No negative numbers allowed")
    }
    else {
        return input
    }
}

export function updateBalance(newBalance) {
    // Set balance directly
    localStorage.setItem('currentBalance', Number(newBalance));
    showBalance();
}

//return current balance
export function getCurrentBalance() {
    const val = localStorage.getItem('currentBalance');
    return val === null || isNaN(Number(val)) ? 0 : Number(val);
}