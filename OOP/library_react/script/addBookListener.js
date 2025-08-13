export function addBookBtn(modal) {
    const dialog = document.getElementById(modal)

    document.addEventListener('click', (e) => {
        if (e.target.id == 'newBook') {
            dialog.showModal()
            console.log('new btn clicked')

        }
        else if (e.target.id == modal) {
            dialog.close()
        }
    })

}
