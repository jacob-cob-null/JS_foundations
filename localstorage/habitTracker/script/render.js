import { habitHandler } from "./habitObject.js"

export function renderHabits() {
    const habitContainer = document.getElementById('habitContainer')

    habitContainer.innerHTML = ""

    const habitArray = habitHandler.getAllHabits();
    habitArray.forEach(habit => {
        const li = document.createElement('div')
        li.classList = "bg-white shadow-md h-[40px] w-full rounded-md grid grid-cols-6 place-content-center p-2"
        li.id = habit.id
        li.innerHTML =
            `
             <h1 class="col-span-5">${habit.title}</h1>
          <div class="col-span-1 flex justify-between items-center gap-2">
            <button class="toggle bg-green-200 w-[100px] h-full rounded-md">
              done
            </button>
            <i class="fa fa-trash"></i>
          </div>`
        attachEvent(li, habit.id)
        habitContainer.appendChild(li)
    });
}

function attachEvent(cont, id) {
    cont.addEventListener("click", (e) => {
        //toggle 
        if (e.target.classList.contains('toggle')) {
            habitHandler.toggleHabit(id)
        }
        //delete
        if (e.target.classList.contains('fa-trash')) {
            habitHandler.deleteHabit(id)
        }
    })
}