class User{
    constructor(username ){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const first = new User("Sanjay")
first.logMe()
//console.log(first.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const iQ = new Teacher("Android 18", "IQ@phone.com")
iQ.logMe();
console.log(iQ.createId());
