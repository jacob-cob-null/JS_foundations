import { showBalance } from "./render.js"

export let currentBalance = 0

export function getIncome() {
    const input = document.getElementById('amount').value
    if (input < 0) {
        alert("No negative numbers allowed")
    }
    else {
        return input
    }
}

export function updateBalance(newBalance) {
    //get sum of balance
    if (newBalance > 0) {
        let balance = getCurrentBalance() + Number(newBalance)
        localStorage.setItem('currentBalance', balance)

        //render updated balance
        showBalance()
    }
}

//return current balance
export function getCurrentBalance() {
    return Number(localStorage.getItem('currentBalance'))
}