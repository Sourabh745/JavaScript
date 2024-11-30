function SetUsername(username){
    this.username = username
    console.log("called");
    
}

function createUser (username, email, password){
//    SetUsername(username)// createUser { email: 'sour@fb.com', password: 'soulsociety' } because this function is not called
    SetUsername.call(this, username)// this will hold execution context(the value it returning) of setusername even after it is removed from the call stack 
    this.email = email
    this.password = password
}

const first = new createUser("sourabh", "sour@fb.com", "soulsociety")
console.log(first);
