import { delButton, editButton, toggleButton } from "./buttons.js";

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

    // Attach unique ID so buttons know which book they belong to
    btnGroup.appendChild(editButton(() => handleEdit(bookObj.id)));
    btnGroup.appendChild(delButton(() => handleDelete(bookObj.id)));
    btnGroup.appendChild(toggleButton(() => handleToggle(bookObj.id)));

    bookCont.append(title, author, btnGroup);

    return bookCont;
}
