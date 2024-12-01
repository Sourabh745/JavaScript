const User = {
    _email: 'hell@hell.helios', // _ we just defininf it as private modifier
    _password: 'king',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
         this._email = value
    }
}

const devil = Object.create(User) // factory function are called when use Object.create(on which based this fn will be created like User object above) by default it null
console.log(devil.email);
