//user class
let activeUsers = []

class User {
    constructor(username, email){
        this.username = username;
        this.email = email;
        this.isLoggedIn = false;
    }
    login() {
        if(!this.isLoggedIn){
            console.log(`User: ${this.username} has logged in at ${getDate()}`)
            let record = {name: this.username, time: getDate()}
            activeUsers.push(record)
            this.isLoggedIn = true
        }
        else {
            console.log(`This user is already logged in`)
        }

    }
    logout() {
        console.log(`User: ${this.username} has logged out at ${getDate()}`)
        let index = activeUsers.findIndex(user => user.name == this.username)
        activeUsers.splice(index, 1)
        this.isLoggedIn = false
    }
    status() {
        console.log(`User ${this.username} is ${this.isLoggedIn ? 'Online' : 'Offline'}`)
    }
}

function getDate() {
    return new Date().toLocaleString()
}
function getActiveUsers() {
    activeUsers.forEach(users => {
        console.log(users)
    })
}

const user1 = new User('Lance', 'lance@gmail.com')
const user2 = new User('Jacob', 'jacob@gmail.com')

user1.login()
user1.status()
user2.login()

getActiveUsers()
user1.logout()
user2.logout()
user2.status()


getActiveUsers()