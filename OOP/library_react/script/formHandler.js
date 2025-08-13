import { newBook } from "./books.js";

export function inputHandler() {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    newBook(title, author)
}