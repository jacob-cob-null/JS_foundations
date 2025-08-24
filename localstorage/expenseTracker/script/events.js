export function buttonEvents() {
  //buttons
  const addIncome = document.getElementById("addIncome");
  const addExpense = document.getElementById("addExpense");
  const clearHistory = document.getElementById("clearHistory");

  //modals
  const incomeModal = document.getElementById("incomeModal");
  const expenseModal = document.getElementById("expenseModal");

  //init modals
  modalIncome(incomeModal);
  modalIncome(expenseModal);

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
    alert("clear");
  };
}
//modal utility for main action and cancel
function modalIncome(modal) {
  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("cancel")) {
      modal.close();
    }
    if (e.target.classList.contains("action")) {
      alert("Dialog main function!");
      modal.close();
    }
  });
}
