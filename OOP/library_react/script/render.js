import { addBookBtn } from "./addBookListener.js";
import { getBook } from "./books.js";
import { bookDOM } from "./components/bookContainer.js";



export function initApp() {
    let bookContainer = document.getElementById('bookContainer')
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