class user {
    constructor(name, role){
        this.name = name,
        this.role = role
    }
}
const user1 = new user("John Santos","Admin")
const user2 = new user("Meela Fel", "User")
const user3 = new user("Fitch Ros", "User")

function logDetails(activity) {
    console.log(`Name: ${this.name}, Role: ${this.role}, Action:${activity}`)
}

logDetails.call(user1, 'Updated Book Logs')
logDetails.call(user2, 'Registered Log')
logDetails.call(user3, 'Viewed Dashboard')


logDetails.apply(user1, ['Updated Book Logs'])
logDetails.apply(user2, ['Registered Log'])
logDetails.apply(user3, ['Viewed Dashboard'])
