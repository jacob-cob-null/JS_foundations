import { getDate } from "./date.js"

export let habitArray = []

function habitFunction() {

    //save local storage
    const saveLocal = () => localStorage.setItem("habitArray", JSON.stringify(habitArray))

    //load local storage
    const loadLocal = () => {
        return JSON.parse(localStorage.getItem("habitArray")) || []
    }

    return {
        newHabit: (title) => {
            const id = crypto.randomUUID()
            const dateNow = getDate()
            habitArray.push({ id, title, status: false, dateNow })
            saveLocal()
        },
        toggleHabit: (id) => {
            const habit = habitArray.find(item => {
                item.id === id
            })
            if (habit) {
                habit.status == !habit.status
                saveLocal()
            }
        },
        deleteHabit: (id) => {
            habitArray = habitArray.filter(item => item.id === id)
            saveLocal()
        },
        getAllHabits: () => {
            return loadLocal()
        }
    }
}
export const habitHandler = habitFunction()