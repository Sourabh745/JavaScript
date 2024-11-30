//literal object
const user = {
    username: "sourabh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log(`username: ${this.username}`);
        // we use this so that browser know that we are talking about current object
        console.log(this);     
    }
}

//console.log(user.username);
//console.log(user.getUserDetails());

/* In Node.js, this outside an object is {} because it's equivalent to module.exports.
In browsers:
Non-strict mode: this is the window object (often displayed as {} in dev tools for brevity).
Strict mode: this is undefined.
Understanding the execution context and environment is key to interpreting the behavior of this. */

//=================================================================

//Constructor function
// new is called constructor function  and it is used to create new context so it doesn't affect old one like new Promise() / new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username // var = value get from parameters
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting  =function(){
        console.log(`Welcome ${this.username}`);       
    }

   // return this; its implicitly define it will return even if you not write return
}
// why we need new keyword
const userOne = new User("sourabh", 12, true) // have differnet value
const userTwo = User("shobit", 1, false) // have differnet value 

//userTwo override userOne 
//console.log(userOne);
//console.log(userTwo);

 // that's why need new so it doesn't affect each other
//now this program have two instances 

//step 1 = a object is created
//step 2 = add on multiple fiels in construction function
//step 3 = wrap up all variable in this keyword
// step 4 = you will get all field of object

//encapsulation = userOne
//abstraction = constructor in below

console.log(userOne.constructor);
//console.log(userTwo.constructor);
console.log(userOne instanceof User);// true
console.log(userTwo instanceof User); // false
console.log(userOne instanceof Object);// true

