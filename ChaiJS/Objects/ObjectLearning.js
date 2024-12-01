// way to create object
// Object.create its also called to create a object constructor through 



//======SYMBOL=======
const mySym = Symbol("key1")
const mySym1 = Symbol("key2")
//console.log( typeof mySym);
//console.log( typeof mySym1);


//object literals   |  Objects are in key value pair.
const JsUser = {
    name: "Sourabh",
    "full Name" : "Sourabh Thapliyal", // these type of value cannot be accessed using '.'
    age: 22,
    [mySym] : "myKey1", // correct way
    mySym1 : "myKey2",// wrong way to use symbol in object
    location: "Chandigarh",
    email: "sourabh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}


//==================================================================

//1st way to access objects 
//console.log(JsUser.location);
//console.log(JsUser.lastLoginDays[0])
// console.log(JsUser.full Name);
//but can be if there is no space in key like fullName instead of full Name

////================================================================

// 2nd way
//console.log(JsUser[name]); // wrong way
// console.log(JsUser["name"]); // correct way
// console.log(JsUser["full Name"]);
// console.log(typeof JsUser.mySym1); // type of string
// console.log(JsUser.mySym1);
// console.log(typeof JsUser[mySym]); // type of symbol
// console.log(JsUser[mySym]);


//======================================
//how to change
JsUser.email = "sthapliyal@yahoo.com"
//Object.freeze(JsUser) // now its freeze the object now its not updatable
JsUser.email = "abc@gmail.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js");
}

JsUser.greetingTwo = function(){
    console.log(`Hello js, ${this.name}`); //this refer to the current object
}

console.log(JsUser.greeting); // OUTPUT : return function reference [Function (anonymous)] | freeze state = undefined 
console.log(JsUser.greeting()); // error it is not a function if object is in freeze state
console.log(JsUser.greetingTwo());
