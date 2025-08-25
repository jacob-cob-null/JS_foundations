import { buttonEvents } from "./events.js";
import { showBalance, renderExpense } from "./render.js";


export function initApp() {
    buttonEvents();
    showBalance();
    renderExpense();
}