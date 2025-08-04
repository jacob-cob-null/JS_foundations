const closure = () => {
    let counter = 0
    return {
        increase: () => console.log(counter++),
        get: () => console.log(`Counter: ${counter}`)
    }
}
const outer = closure()
outer.increase()
outer.increase()
outer.increase()
outer.increase()
outer.increase()
outer.get()