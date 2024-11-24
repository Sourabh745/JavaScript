let score = true

console.log(typeof score);
console.log(typeof(score));
// output = number number

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


//NaN : it prints when you covert a string into number like
//let a= "33abc" | let b= Number(a) 
// it will convert the string but print nan because b doesn't hold pure number

//"33"  => 33
// "33ab" => NaN
// true => 1; false => 0

let isLoggedIn ="sourabh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let value = 2;
let negVal = -value;

console.log(2+2);
console.log(2*2);//multiply
console.log(2**2);//power
console.log(2**4);
