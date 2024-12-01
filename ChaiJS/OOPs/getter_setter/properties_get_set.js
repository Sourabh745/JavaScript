// function way of getter setter

function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
}

const a = new User('hi@yahoo.in', 'qwerty')
console.log(a.email);
