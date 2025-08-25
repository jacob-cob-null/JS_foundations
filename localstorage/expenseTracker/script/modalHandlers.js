import { getCurrentBalance, updateBalance } from "./income.js";
import { expenseHandler } from "./expense.js";
import { renderExpense, showBalance } from "./render.js";

export function setupExpenseModal(modal) {
    let isEditMode = false;
    let editId = null;
    let oldAmount = 0;

    function resetModal() {
        const titleInput = document.getElementById('expenseTitle');
        const amountInput = document.getElementById('expenseAmount');
        const categoryInput = document.getElementById('expenseCategory');
        const modalTitle = modal.querySelector('h1');
        const actionBtn = modal.querySelector('.action');

        titleInput.value = '';
        amountInput.value = '';
        categoryInput.value = 'food';
        modalTitle.textContent = 'Add Expense';
        actionBtn.textContent = 'Add';
        isEditMode = false;
        editId = null;
        oldAmount = 0;
    }

    function handleSubmit(e) {
        if (!e.target.classList.contains('action')) return;
        
        const titleInput = document.getElementById('expenseTitle');
        const amountInput = document.getElementById('expenseAmount');
        const categoryInput = document.getElementById('expenseCategory');

        const title = titleInput.value.trim();
        const amount = Number(amountInput.value);
        const category = categoryInput.value;

        if (!title || isNaN(amount) || amount <= 0 || !category) return;

        if (isEditMode) {
            // Handle edit
            const diff = amount - oldAmount;
            const currentBalance = getCurrentBalance();
            
            if (diff > 0 && diff > currentBalance) {
                alert('Insufficient Balance for this update');
                return;
            }

            if (diff !== 0) {
                const newBalance = currentBalance - diff;
                localStorage.setItem('currentBalance', newBalance);
                showBalance();
            }

            expenseHandler.updateExpense(editId, title, amount, category);
        } else {
            // Handle add
            if (amount > getCurrentBalance()) {
                alert('Insufficient Balance');
                return;
            }
            expenseHandler.newExpense(title, amount, category);
            updateBalance(getCurrentBalance() - amount);
        }

        renderExpense();
        resetModal();
        modal.close();
    }

    function enterEditMode(id, amount) {
        isEditMode = true;
        editId = id;
        oldAmount = amount;

        const expense = expenseHandler.getAllExpense().find(item => item.id === id);
        if (!expense) return;

        const titleInput = document.getElementById('expenseTitle');
        const amountInput = document.getElementById('expenseAmount');
        const categoryInput = document.getElementById('expenseCategory');
        const modalTitle = modal.querySelector('h1');
        const actionBtn = modal.querySelector('.action');

        titleInput.value = expense.title;
        amountInput.value = expense.amount;
        categoryInput.value = expense.category;
        modalTitle.textContent = 'Edit Expense';
        actionBtn.textContent = 'Update';

        modal.showModal();
    }

    // Set up modal event listeners
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('cancel')) {
            resetModal();
            modal.close();
        }
        handleSubmit(e);
    });

    modal.addEventListener('close', resetModal);

    return {
        enterEditMode
    };
}
