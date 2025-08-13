import { inputHandler } from "./formHandler.js"

export function addBookBtn(modal) {
    const dialog = document.getElementById(modal)
    const addBtn = document.getElementById('addBtn')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    })
    document.addEventListener('click', (e) => {
        if (e.target.id == 'newBook') {

            dialog.showModal()
            addBtn.addEventListener('click', () => inputHandler())
        }
        else if (e.target.id == modal) {
            dialog.close()
        }
    })

}
