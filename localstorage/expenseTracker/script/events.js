import { getIncome, updateBalance } from "./income.js";
import { getExpense, expenseHandler } from "./expense.js";
import { renderExpense, showBalance } from "./render.js";

export function buttonEvents() {
  //buttons
  const addIncome = document.getElementById("addIncome");
  const addExpense = document.getElementById("addExpense");
  const clearHistory = document.getElementById("clearHistory");

  //modals
  const incomeModal = document.getElementById("incomeModal");
  const expenseModal = document.getElementById("expenseModal");

  //init modals
  modalUtility(incomeModal, () => {
    updateBalance(getIncome());
  });
  // Only use modalUtility for incomeModal, not for expenseModal

  //add income event
  addIncome.onclick = () => {
    incomeModal.showModal();
  };
  //add expense event
  addExpense.onclick = () => {
    // Remove previous listeners from .action button
    const actionBtn = expenseModal.querySelector('.action');
    const newActionBtn = actionBtn.cloneNode(true);
    actionBtn.parentNode.replaceChild(newActionBtn, actionBtn);
    // Attach add handler
    newActionBtn.addEventListener('click', () => {
      getExpense();
      renderExpense();
      expenseModal.close();
    }, { once: true });
    expenseModal.showModal();
  };
  //clear event
  clearHistory.onclick = () => {
    localStorage.clear();
    location.reload(); // Refresh the page to reset all states
  };
}

//modal utility for main action and cancel
export function modalUtility(modal, mainAction) {
  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("cancel")) {
      modal.close();
    }
    if (e.target.classList.contains("action")) {
      mainAction();
      renderExpense(); // Force a re-render when closing the modal
      modal.close();
    }
  });
}
//update expense
