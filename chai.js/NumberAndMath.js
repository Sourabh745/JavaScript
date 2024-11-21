const score = 400 // during runtime its datatype assign

const balance = new Number(1234654656) // now its Number during compile time
// console.log(score);
// console.log(balance.toString());//convert to string and you can use string properties ,check it yourself by using typeOf
// console.log(balance.toExponential());//if balance = 10 or 123 ,  it return 1e + 1 or 1.23e + 2
// console.log(balance.toLocaleString());// put comma to format it in readable form
// console.log(balance.valueOf());// print value
// console.log(balance.toFixed(2));//Number of digits after the decimal point. like 100 => 100.00

const num = 1123.556
//console.log(num.toPrecision(4)); // returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
//return round off value if you know from where decimal is going to start

// console.log(Math.PI)
// console.log(Math.abs(-56));
// console.log(Math.round(4.7));
// console.log(Math.ceil(4.3));// print 5
// console.log(Math.floor(4.9));// print 4
// console.log(Math.pow(2,4));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const fromRange = 10
const toRange = 20

console.log(Math.floor(Math.random() * (toRange - fromRange + 1)) + fromRange);
console.log(Date.UTC.prototype);


