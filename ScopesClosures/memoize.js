
const sum = (a, b) => a + b


const memoize = (fn) => {
    //map of cached pairs
    const cache = new Map()

    //return memoized if input already cached
    return function (...args) {
        const key = JSON.stringify(args)

        if (cache.has(key)) {
            console.log("I am cached")
            return cache.get(key)
        }

        //add input to cache
        const result = fn(...args)
        cache.set(key, result)
        console.log("Dial back ho, this is new")
        return result
    }

}
const memoizedAdder = memoize(sum);
console.log(memoizedAdder(10, 10))
console.log(memoizedAdder(10, 10))
console.log(memoizedAdder(20, 10))