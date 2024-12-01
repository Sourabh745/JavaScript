//After ES6

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`
    }
    capitalUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const first = new User("asta", "rin")
console.log(first.encryptPassword());
console.log(first.capitalUsername());

//=============================
//Before ES6 using functions

function Users(username, password) {
    this.username = username;
    this.password = password;
}

Users.prototype.encryptPassword = function () {
    return `${this.password}abc`
}
Users.prototype.capitalUsername = function () {
    return `${this.username.toUpperCase()}`
}


const first1 = new User("logan", "wolverin")
console.log(first1.encryptPassword());
console.log(first1.capitalUsername());
