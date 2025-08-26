export function getDate() {
    return new Date().toLocaleDateString("en-US")
}

export function saveDate() {
    localStorage.setItem("date", getDate())
}
