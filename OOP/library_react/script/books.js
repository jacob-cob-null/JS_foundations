import { renderBooks } from "./render.js"

const books = []

function booksArray() {
    return {
        addBook: (obj) => books.push(obj),
        delBook: (id) => {
            const index = books.findIndex(book => book.bookID === id)
            if (index !== -1) books.splice(index, 1)
        },
        editBook: (id, newTitle, newAuthor) => {
            const book = books.find(b => b.bookID === id)
            if (book) {
                book.bookTitle = newTitle
                book.bookAuthor = newAuthor
            }
        },
        findBook: (id) => books.find(b => b.bookID === id),
        toggleBook: (id) => {
            let book = books.find(b => b.bookID === id)
            book.bookStatus = !book.bookStatus
            console.log(`Toggled ${book.bookTitle}`)
        },
        getBooks: () => [...books]
    }
}

//one shared instance
const bookArr = booksArray()

//initial
newBook("The Pragmatic Programmer", "Andrew Hunt & David Thomas")
newBook("Clean Code", "Robert C. Martin")
newBook("JavaScript: The Good Parts", "Douglas Crockford")
newBook("You Don't Know JS Yet", "Kyle Simpson")
newBook("Eloquent JavaScript", "Marijn Haverbeke")

//new book
export function newBook(title, author) {
    let book = {
        bookID: crypto.randomUUID(),
        bookTitle: title,
        bookAuthor: author,
        bookStatus: false
    }
    bookArr.addBook(book)
}
//delete book
export function delBook(id) {
    bookArr.delBook(id)
    renderBooks()
}
//edit book
export function editBook(id) {
    const bookObj = bookArr.findBook(id)
    if (!bookObj) return

    let newTitle = prompt(`Enter New Title: (${bookObj.bookTitle})`)
    let newAuthor = prompt(`Enter New Author: (${bookObj.bookAuthor})`)
    if (newTitle && newAuthor) {
        bookArr.editBook(id, newTitle, newAuthor)
    }
    renderBooks()
}
//toggle book
export function toggleBook(id) {
    bookArr.toggleBook(id)
    renderBooks()
}

//get boks
export function getBook() {
    return bookArr.getBooks()
}