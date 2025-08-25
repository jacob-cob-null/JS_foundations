import { getCurrentBalance } from "./income.js"
//show current balance
export function showBalance() {
    document.getElementById('balance').textContent = `Balance: ₱${getCurrentBalance()}`
}
