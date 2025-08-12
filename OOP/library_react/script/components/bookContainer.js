import { delButton, editButton, toggleButton } from "./buttons.js";
import { newBook, delBook, editBook } from "../books";
export function bookDOM(bookObj) {
    const bookCont = document.createElement('div');
    bookCont.className =
        'w-[240px] h-[280px] bg-white shadow-md rounded-md p-4 border-l-8 border-blue-400 flex flex-col justify-between';

    const title = document.createElement('h1');
    title.className = 'text-2xl font-bold';
    title.textContent = bookObj.bookTitle;

    const author = document.createElement('h1');
    author.className = 'text-xl font-bold';
    author.textContent = bookObj.bookAuthor;

    const btnGroup = document.createElement('div');
    btnGroup.className = 'flex justify-end items-center gap-2';
    let id = bookObj.bookID
    bookCont.dataset.id = id

    const editBtn = editButton();
    editBtn.addEventListener('click', () => onEdit(id));

    const delBtn = delButton();
    delBtn.addEventListener('click', () => onDelete(id));

    const toggleBtnEl = toggleButton();
    toggleBtnEl.addEventListener('click', () => onToggle(id));


    btnGroup.append(editBtn, delBtn, toggleBtnEl);
    bookCont.append(title, author, btnGroup);

    return bookCont;
}
