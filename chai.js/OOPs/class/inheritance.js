class User {
    constructor(username ){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username) // you can directly access username from User now
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}
const first = new Teacher("Sunil", "sunil@gmail.com", "chhatri");
first.addCourse();
first.logMe()

const second = new User("Tanay")
second.logMe()
console.log(first instanceof Teacher);// T
console.log(first instanceof User);// T
console.log(second instanceof Teacher);// F
console.log(second instanceof User);// T
