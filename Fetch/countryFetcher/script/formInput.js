export function getInput() {
    try {
        const input = document.getElementById('input').value.trim()
        if (validateInput(input)) {
            alert(`${input} is an Invalid input`)
        }
        else {
            return input
        }
    } catch (error) {
        alert(error)
    }
}

function validateInput(str) {
    //only alphabets
    const regex = /^[A-Za-z\s]+$/
    //return bool
    return !str || !regex.test(str)
}