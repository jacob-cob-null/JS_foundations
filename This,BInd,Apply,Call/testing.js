const book = {
    title: "A Book to Read",
    author: "Helen Garris"
}
function info(year){
    console.log(`The book "${this.title}" was written by ${this.author} and was released on the year ${year}`)
}
info.call(book, 2000)
info.apply(book, [2000])

const bookInfo = info.bind(book,2001)
bookInfo()