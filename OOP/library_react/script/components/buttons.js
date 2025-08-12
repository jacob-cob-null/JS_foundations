export function editButton(onClick) {
    const btn = document.createElement('button');
    btn.className = 'h-[20px] w-fit p-2 outline-1 flex items-center justify-center rounded-md bg-yellow-50 outline-yellow-300 text-yellow-600';
    btn.textContent = 'Edit';
    btn.addEventListener('click', onClick);
    return btn;
}
export function delButton(onClick) {
    const btn = document.createElement('button');
    btn.className = 'h-[20px] w-fit p-2 outline-1 flex items-center justify-center rounded-md bg-red-50 outline-red-300 text-red-600';
    btn.textContent = 'delete';
    btn.addEventListener('click', onClick);
    return btn;
}
export function toggleButton(onClick) {
    const btn = document.createElement('button');
    btn.className = 'h-[20px] w-fit p-2 outline-1 flex items-center justify-center rounded-md bg-green-50 outline-green-300 text-green-600';
    btn.textContent = 'read?';
    btn.addEventListener('click', onClick);
    return btn;
}