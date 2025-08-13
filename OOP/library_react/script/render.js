import { addBookBtn } from "./addBookListener.js";
import { getBook } from "./books.js";
import { bookDOM } from "./components/bookContainer.js";

let bookContainer = document.getElementById('bookContainer')

export function initApp() {
    addBookBtn('newBookform')
    renderBooks()
}

export function renderBooks() {
    //book obj
    let books = getBook()
    //clear content
    bookContainer.innerHTML = ''
    //append iterated object to target
    books.forEach(b => {
        let bookItem = bookDOM(b)
        bookContainer.appendChild(bookItem)
    });
}