import { getIncome, updateBalance } from "./income.js";


export function buttonEvents() {
  //buttons
  const addIncome = document.getElementById("addIncome");
  const addExpense = document.getElementById("addExpense");
  const clearHistory = document.getElementById("clearHistory");

  //modals
  const incomeModal = document.getElementById("incomeModal");
  const expenseModal = document.getElementById("expenseModal");

  //init modals
  modalIncome(incomeModal, () => updateBalance(getIncome()));
  modalIncome(expenseModal, () => updateBalance(getIncome()));

  //add income event
  addIncome.onclick = () => {
    incomeModal.showModal();
  };
  //add expense event
  addExpense.onclick = () => {
    expenseModal.showModal();
  };
  //clear event
  clearHistory.onclick = () => {
    localStorage.clear()
  };
}

//modal utility for main action and cancel
function modalIncome(modal, mainAction) {
  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("cancel")) {
      modal.close();
    }
    if (e.target.classList.contains("action")) {
      mainAction()
      modal.close();
    }
  });
}
