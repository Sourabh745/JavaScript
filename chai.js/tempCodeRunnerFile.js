const myHeros = ["Spiderman", "Deadpool"]
const myArr = [1,2,3,6,4,5]

//console.log(myHeros.length); //length

//Arrays method
//add
myArr.push(6);
//console.log(myArr);

//remove
myArr.pop();
//console.log(myArr);

//shift and unshift
myArr.unshift(8); // add 8 at pos 0 and shift all to right and it is not optimized for large data set
//console.log(myArr)

myArr.shift(); // shift one element from right to left it lead to remove first element
//console.log(myArr)

//question type method
//console.log(myArr.includes(1));
//console.log(myArr.indexOf(4));

const nArr = myArr.join(); // add all element to a string now 

//console.log(typeof nArr); // string
//console.log(typeof myArr); // object

//SLICE AND SPLICE
console.log("A ", myArr);

const myn1 = myArr.slice(1,3);
console.log("Slice: ", myn1);
console.log("B ",myArr);


const myn2 = myArr.splice(1,3); // splice( x = pos where to start , total no of element you want to remove from x  ) it remove total 3 element from the original array pos 1 like 2,3,6, remain are 1,4,5 
console.log("C ",myArr);
console.log("Splice: ", myn2);

console.log(myArr);
