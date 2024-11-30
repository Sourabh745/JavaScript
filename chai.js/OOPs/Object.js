// Everything in javascript is object 
// imp.  function refer to functions as well as object 
// object is parent of everything there is no one above 
// object prototype is null 

function multiplyBy5(num) {
    return num * 5
}

multiplyBy5.power = 5;

console.log(multiplyBy5(5)); // 25
console.log(multiplyBy5.power);//  5
console.log(multiplyBy5.prototype); // {}

//===============================================================================
// When you call a method on an object, JavaScript looks for that method on the object itself. If the method doesn’t exist directly on the object, it looks up the prototype chain.
//The method itself doesn’t store this. Instead, this is set at the time of method invocation, based on the object that called the method.
// this is set to a current context of the scope 
function createUser(username, score) {
    this.username = username
    this.score = score
    return this
}

// can create custom prototype methods
createUser.prototype.increment = function () {
    this.score++; // use this so it can know who is calling it a or b
}

createUser.prototype.result = function () {
    return `Hi! my name is ${this.username} and my score is ${this.score}`
}

createUser.prototype.printMe = function () {
    console.log(`My score is ${this.score}`);
}

const a = new createUser("apple", 120)
const b = new createUser("banana", 100)

// a.increment();
// b.increment();
console.log(a.result());
console.log(b.result());
a.printMe()
b.printMe()

// NOTES of NEW keyword
/**
 * Hers what happens behind the scene when the  new keyword is used:
 * 
 * A new object is created: The new Keyword initiates the creation of a new javascript object
 * 
 * A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.This means that it has access to the properties and methods defined on the constructor's prototype.
 * 
 * The constructor is called: The constructor function is called with the specified the argument  and this is bound t the newly created object. If no explicit return value is specified from the constructor, javascript assume this, the newly created object , to be the  intended return value.
 * 
 * The new object is returned: After the  constructor function has been called, if it doesn't return a non-primitive value (object, array m function, etc.), the newly created object is returned
 */