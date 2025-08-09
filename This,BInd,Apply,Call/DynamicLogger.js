class user {
    constructor(name, role){
        this.name = name,
        this.role = role
    }
}
const user1 = new user("John Santos","Admin")
const user2 = new user("Meela Fel", "User")
const user3 = new user("Fitch Ros", "User")

const userList = [user1, user2, user3]
const actions = ['Updated Book Logs','Registered Log','Viewed Dashboard']
function logDetails(activity) {
    console.log(`Name: ${this.name}, Role: ${this.role}, Action:${activity}`)
}

userList.forEach((user, i) => {
    logDetails.call(user, actions[i])
});

userList.forEach((user, i) => {
    logDetails.apply(user, [actions[i]])
});
