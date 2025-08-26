import { habitHandler } from "./habitObject.js"

export function renderHabits() {
    const habitContainer = document.getElementById('habitContainer')

    habitContainer.innerHTML = ""

    const habitArray = habitHandler.getAllHabits();
    habitArray.forEach(habit => {
        const li = document.createElement('div')
        li.classList = "bg-white shadow-md h-[70px] w-full rounded-md grid grid-cols-6 place-content-center p-2 mb-2"
        li.id = habit.id

        //line through when toggled
        let titleClass = ""
        let status = ""
        let color = ""

        if (habit.status) {
            titleClass = "line-through text-gray-400"
            status = "done"
            color = "bg-green-200"
        } else {
            status = "pending"
            color = "bg-red-200"
        }
        li.innerHTML =
            `
             <h1 class="col-span-4 ${titleClass}">${habit.title}</h1>
          <div class="col-span-2 w-full flex justify-around items-center gap-4">
            <button class="toggle ${color} w-[100px] px-6 py-2 h-full rounded-md">
              ${status}
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