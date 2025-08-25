import { getCurrentBalance, updateBalance } from "./income.js";
import { renderExpense } from "./render.js"

//expense utility
export function expenseObj() {
    let expense = JSON.parse(localStorage.getItem('expense')) || [];

    const save = () => {
        localStorage.setItem('expense', JSON.stringify(expense));
        renderExpense();
    };

    return {
        newExpense: (title, amount, category) => {
            const id = crypto.randomUUID();
            expense.push({ id, title, amount, category });
            save();
        },
        deleteExpense: (id) => {
            expense = expense.filter(item => item.id !== id);
            save();
        },
        updateExpense: (id, newTitle, newAmount, newCategory) => {
            const toUpdate = expense.find(item => item.id === id);
            if (toUpdate) {
                toUpdate.title = newTitle;
                toUpdate.amount = newAmount;
                toUpdate.category = newCategory;
                save();
            }
        },
        getAllExpense: () => [...expense]
    };
}

export const expenseHandler = expenseObj()

//get value from forms
export function getExpense() {
    const titleInput = document.getElementById('expenseTitle');
    const amountInput = document.getElementById('expenseAmount');
    const categoryInput = document.getElementById('expenseCategory');

    const title = titleInput.value.trim();
    const amount = Number(amountInput.value);
    const category = categoryInput.value.trim();

    if (amount < getCurrentBalance()) {
        updateBalance(getCurrentBalance() - amount)
    } else {
        alert('Insufficient Balance')
        return
    }

    // block empty or invalid inputs
    if (title && !isNaN(amount) && amount > 0 && category) {
        expenseHandler.newExpense(title, amount, category);
        // Clear input fields after adding
        titleInput.value = '';
        amountInput.value = '';
        categoryInput.value = '';
    }
}

