let books = []

export function newBook(title, author) {
    let book = {
        bookID: crypto.randomUUID(),
        bookTitle: title,
        bookAuthor: author,
        bookStatus: false
    }
}