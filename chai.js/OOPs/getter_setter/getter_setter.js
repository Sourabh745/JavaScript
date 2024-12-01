//Class way of getter and setter

class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    // getter and setter override this.password
    get password(){
        //return this._password.toUpperCase()
        return `${this._password}def`
    }
    set password(value){
        this._password = value
    }

    //email
    get email(){
        return this._email.toUpperCase()
    }
    set email(value1){
        this._email = value1.toUpperCase()
    }
}

const hi = new User("lol@fb.com", "abc")
console.log(hi._password); // getting set password() function value not from get password()
console.log(hi._email);


//Maximum call stack size is exceeded when system get confused where value is set and it continously call constructor and getter and setter everytime