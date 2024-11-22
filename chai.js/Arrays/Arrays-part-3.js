const marvelHeros = ["Spiderman", "Deadpool"]
const dcHeros = ["Batman", "Superman"]

//marvelHeros.push(dcHeros); // you can push even a object into another object
//console.log(marvelHeros);
//console.log(marvelHeros[2][1]);

//=======concat========
const allHeros = marvelHeros.concat(dcHeros)
//console.log(allHeros);


//======Spread operator=======
const allNewHeros = [...marvelHeros, ...dcHeros]
//console.log(allNewHeros);



//=================================SOME SITUATION==========================
const anotherArr = [1,2,3,[4,5,6],7,[6,7],[4,5]];

const real_another_array = anotherArr.flat();
console.log(real_another_array);

console.log(Array.isArray(allHeros)); // check it is array

console.log(Array.from("Sourabh"));// array from value 
console.log(Array.from({name :"Sourabh"}));// return empty array


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));


//=======sort========
//console.log(marvelHeros.sort());
