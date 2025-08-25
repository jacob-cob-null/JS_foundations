import { getCurrentBalance } from "./income.js"
import { expenseObj, expenseHandler } from "./expense.js"
import { modalUtility } from "./events.js"

//show current balance
export function showBalance() {
    document.getElementById('balance').textContent = `Balance: ₱${getCurrentBalance()}`
}

//render expenses 
export function renderExpense() {

    const expenseArray = expenseHandler.getAllExpense() || []

    //expense table, clear before use
    const expenseTable = document.getElementById('expenseTable')
    expenseTable.innerHTML = ''

    //iterate through expense
    expenseArray.forEach(element => {
        const expenseItem = expenseElement(element.id, element.title, element.amount, element.category)
        expenseTable.appendChild(expenseItem)
    });
}

//single expense element
function expenseElement(id, title, amount, category) {
    const expenseContainer = document.createElement('div');
    expenseContainer.className = 'h-[40px] w-full flex justify-between items-center bg-slate-50 rounded-sm mb-2 p-4';
    expenseContainer.id = id;

    expenseContainer.innerHTML = `        
        <div class="flex gap-8">
            <h1 class="bg-red-100 py-[2px] px-2 rounded-md">${category}</h1>
            <h1>${title}</h1>
        </div>
        <h1>${amount}</h1>
        <div class="action-container flex gap-6 justify-center">
            <i class="fa-solid fa-pencil active:text-[14px] transition-all duration-150"></i>
            <i class="fa-solid fa-trash active:text-[14px] transition-all duration-150"></i>
        </div>
    `;

    // attach events directly
    expenseContainer.querySelector(".fa-pencil").addEventListener("click", () => {
        updateExpense(id, amount);
    });

    expenseContainer.querySelector(".fa-trash").addEventListener("click", () => {
        expenseHandler.deleteExpense(id)
    });

    return expenseContainer;
}
function updateExpense(id) {
    const modal = document.getElementById('expenseModal');
    // Use the correct expense array from handler
    const toEditExpense = expenseHandler.getAllExpense().find(item => item.id === id);
    if (!toEditExpense) return;

    // Pre-fill modal fields using modal's input elements
    const titleInput = modal.querySelector('#expenseTitle');
    const amountInput = modal.querySelector('#expenseAmount');
    const categoryInput = modal.querySelector('#expenseCategory');

    titleInput.value = toEditExpense.title;
    amountInput.value = toEditExpense.amount;
    categoryInput.value = toEditExpense.category;

    // Show modal
    modal.showModal();

    // Set modal mode to 'edit' to prevent add logic from running
    modal.setAttribute('data-mode', 'edit');
    modal.setAttribute('data-edit-id', id);

    const actionBtn = modal.querySelector('.action');
    const newActionBtn = actionBtn.cloneNode(true);
    actionBtn.parentNode.replaceChild(newActionBtn, actionBtn);

    newActionBtn.addEventListener('click', () => {
        // Only run if in edit mode
        if (modal.getAttribute('data-mode') !== 'edit') return;
        const newTitle = titleInput.value.trim();
        const newAmount = Number(amountInput.value);
        const newCategory = categoryInput.value.trim();
        if (!newTitle || isNaN(newAmount) || newAmount <= 0 || !newCategory) return;

        // Always get the latest original amount from the expense object
        const originalExpense = expenseHandler.getAllExpense().find(item => item.id === id);
        const oldAmount = originalExpense ? Number(originalExpense.amount) : 0;

        // Adjust balance only by the difference
        const diff = newAmount - oldAmount;
        const currentBalance = getCurrentBalance();
        if (diff > 0 && diff > currentBalance) {
            alert('Insufficient Balance for this update');
            return;
        }
        // Update balance
        if (diff !== 0) {
            const newBalance = currentBalance - diff;
            localStorage.setItem('currentBalance', newBalance);
            showBalance();
        }
        // Update expense in place
        expenseHandler.updateExpense(id, newTitle, newAmount, newCategory);
        modal.close();
        // Reset modal mode
        modal.removeAttribute('data-mode');
        modal.removeAttribute('data-edit-id');
    }, { once: true });
}